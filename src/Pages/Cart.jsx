import { RiSubtractFill } from "react-icons/ri";
import { MdAdd, MdAddShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { list, setList } = useContext(UserContext);
  const navigate = useNavigate();

  const subtotal = list.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 50; 
  const total = subtotal + shipping;

  const handleIncrement = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setList(updatedList);
  };

  const handleDecrement = (id) => {
    const updatedList = list.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setList(updatedList);
  };

  const handleRemove = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-5 py-10">
      <div className="flex-1">
        <div className="font-semibold grid grid-cols-5 border-2 border-gray-500 p-5">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>SubTotal</h2>
        </div>

        {list && list.length > 0 ? (
          list.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 border-b border-gray-300 px-5 py-4 items-center"
            >
              <div className="flex flex-wrap justify-start gap-2">
                <img
                  src={item.image}
                  alt={item.fullName}
                  className="h-20 w-20"
                />
                <p className="flex items-center">{item.fullName}</p>
              </div>
              <p>${item.price}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="cursor-pointer h-6 w-6 flex items-center justify-center border rounded"
                >
                  <RiSubtractFill />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="cursor-pointer h-6 w-6 flex items-center justify-center border rounded"
                >
                  <MdAdd />
                </button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 justify-end hover:text-red-700"
              >
                <FiX />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center my-10 text-gray-600">Your cart is empty.</p>
        )}

        <div className="flex justify-end mt-6">
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black border-2 border-black transition duration-300"
          >
            <MdAddShoppingCart />
            Add Item
          </button>
        </div>
      </div>

      {list && list.length > 0 && (
        <div className="w-full lg:w-1/3 border p-6 rounded-md shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
