import { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Checkout() {
  const { list } = useContext(UserContext);
  const navigate = useNavigate();

  // const total = list.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  const subtotal = list.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal < 0.01 ? 0 : subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const [error, setError] = useState("")
  console.log("error", error)
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    pinCode: "",
    mobileNo: "",
    Info: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const isValidEmail = (email) => {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, address, pinCode, email, mobileNo, Info } = input;

    if (!name || !email || !address || !pinCode || !mobileNo) {
      toast.error("Please Fill Required Details");
      return;
    }

    if (!isValidEmail(input?.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (pinCode.length !== 6) {
      toast.error("Please Enter Valid Mobile No");
      return;
    }

    if (mobileNo.length !== 10) {
      toast.error("Please Enter Valid Mobile No");
      return;
    }

    if (name && email && address && pinCode) {
      toast.success("Order placed successfully!");
      navigate("/success");
    }


  }


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-10">

        <form
          onSubmit={handleSubmit}
          className="flex-1 border rounded-md p-6 shadow-md"
        >
          <div className="mb-4">
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />

          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />

          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">MobileNo</label>
            <input
              type="text"
              name="mobileNo"
              value={input.mobileNo}
              onChange={handleChange}
              maxLength={10}
              className="w-full border px-3 py-2 rounded"
            />

          </div>

          <div>
            <label for="countries" class="block font-semibold mb-1">Select The Country</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
              <option selected>Choose a country</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Shipping Address</label>
            <input
              name="address"
              value={input.address}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            ></input>

          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Pincode</label>
            <input
              type="text"
              name="pinCode"
              value={input.pinCode}
              onChange={handleChange}
              maxLength={6}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Additional Information</label>
            <textarea
              name="Info"
              rows="4"
              value={input.Info}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            ></textarea>

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition duration-300"
          >
            Confirm Order
          </button>
        </form>

        {/* Right Side  */}
        <div className="w-full lg:w-2/5 border-2 border-gray-300 p-6 rounded-lg shadow-md h-fit bg-[#F5F5F5] ">
          <div className="border border-[#999796] sm:p-7.5 p-5 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center border border-black p-2 bg-black text-white">Your Order</h2>
            <div className="flex justify-between font-bold border-b border-black py-2">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            <ul className="mb-4">
               {list && list.length > 0 ? (
              list.map((item) => (
                <li key={item.id} className="flex justify-between mb-2 text-sm border-b border-black py-2">

                  <div className="flex flex-wrap gap-3" >
                    <img
                      src={item.image}
                      alt={item.fullName}
                      className="h-8 object-cover w-8 "
                    />
                    <div className="">
                      <p>     {item.fullName}</p>
                      <p className=""> Qut:{item.quantity}</p>
                    </div>
                  </div>
                  <span>${(item.price * item.quantity)}</span>
                </li>
             ))
        ) : (
          <p className="text-center my-10 text-gray-600">Your cart is empty.</p>
        )}
              <li className="flex justify-between mb-2 text-sm border-b border-black py-2">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </li>
            </ul>


            <div className="flex justify-between border-t pt-2 font-semibold text-lg">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>

          <div class="flex items-center my-4">
            <input checked id="Payment-Mode" type="radio" value="Payment-Mode" name="Bank" className="w-4 h-4" />
            <label for="Payment-Mode" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Direct bank transfer</label>
          </div>
          <p>Make your payment directly into our bank account. Please your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <div class="flex items-center  my-4">
            <input checked id="default-radio-2" type="radio" value="Payment-Mode" name="Bank" className="w-4 h-4" />
            <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex flex-wrap items-center gap-2">Paypal <img src="https://furnisy.vercel.app/_next/image?url=%2Fimages%2Fpayment-card.webp&w=256&q=75" className="h-5"></img>What is paypal?</label>
          </div>
          <div class="flex items-center  my-4">
            <input checked id="default-radio-2" type="radio" value="Payment-Mode" name="Bank" className="w-4 h-4" />
            <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Check Payment</label>
          </div>
          <div class="flex items-center  mt-4 mb-10">
            <input checked id="default-radio-2" type="radio" value="Payment-Mode" name="Bank" className="w-4 h-4" />
            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">UPI</label>
          </div>
{/* <div className="flex flex-wrap">
          <div className="flex items-center required: h-5">
            <input id="remember" type="checkbox" value="" className="w-6 h-6 border border-gray-300 rounded-[4px]  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="remember" className="ms-2 text-sm text-gray-900 dark:text-gray-300 font-sans font-medium">I have read and agree to the Website <Link to='#' className="text-black underline text-underline-position">Terms & Condition</Link> </label>
</div> */}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
