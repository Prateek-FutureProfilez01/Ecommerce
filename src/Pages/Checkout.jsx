import { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Checkout() {
  const { list } = useContext(UserContext);
  const navigate = useNavigate();

  const total = list.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
              value ="address"
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
        
        <div className="w-full lg:w-1/3 border-2 border-gray-300 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <ul className="mb-4">
            {list.map((item) => (
              <li key={item.id} className="flex justify-between mb-2 text-sm">
                <span>{item.fullName} x {item.quantity}</span>
                <span>${(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between border-t pt-2 font-semibold text-lg">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
