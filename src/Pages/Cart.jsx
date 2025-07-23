import { RiSubtractFill } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";

function Cart() {
    const { list } = useContext(UserContext);
    const [quantity, setQuantity] = useState({});

    // Initialize quantity on list load
    useEffect(() => {
        const initialQuantities = {};
        list.forEach(item => {
            initialQuantities[item.id] = 1;
        });
        setQuantity(initialQuantities);
    }, [list]);
    

    const handleDecrement = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1
        }));
    };

    const handleIncrement = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    return (
        <>
            <div className="font-semibold grid grid-cols-4 border-2 border-gray-500 p-5 my-10">
                <h2>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>SubTotal</h2>
            </div>

            {list && list.length > 0 ? (
                list.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-4 border-b border-gray-300 px-5 py-2 items-center"
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
                            <button onClick={() => handleDecrement(item.id)} className='cursor-pointer h-6 w-6 flex items-center justify-center border rounded'>
                                <RiSubtractFill />
                            </button>
                            <span>{quantity[item.id]}</span>
                            <button onClick={() => handleIncrement(item.id)} className='cursor-pointer h-6 w-6 flex items-center justify-center border rounded'>
                                <MdAdd />
                            </button>
                        </div>
                        <p>${(item.price * (quantity[item.id] || 1)).toFixed(2)}</p>
                    </div>
                ))
            ) : (
                <p className="text-center my-10 text-gray-600">Your cart is empty.</p>
            )}
        </>
    );
}

export default Cart;
