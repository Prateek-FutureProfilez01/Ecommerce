import { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { list } = useContext(UserContext);
  const navigate = useNavigate();

  const total = list.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Order placed successfully!");
      navigate("/");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 border rounded-md p-6 shadow-md"
        >
          <div className="mb-4">
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Shipping Address</label>
            <textarea
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition duration-300"
          >
            Confirm Order
          </button>
        </form>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 border-2 border-gray-300 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <ul className="mb-4">
            {list.map((item) => (
              <li key={item.id} className="flex justify-between mb-2 text-sm">
                <span>{item.fullName} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between border-t pt-2 font-semibold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
