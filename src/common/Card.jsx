import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ product }) {
    return (
        <div className="flex flex-wrap gap-6 justify-center py-6">
            {product?.map((item) => (
                <Link
                    key={item.id}
                    to={`#`}
                    className="w-80 overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
                >
                    <div className="h-52 bg-gray-100 flex items-center justify-center p-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full object-contain"
                        />
                    </div>

                    <div className="p-4 space-y-2 text-center ">
                        <h2 className="text-lg font-semibold text-slate-800 line-clamp-2">{item.title}</h2>

                            <p className="text-base text-slate-700">
                                <strong>Price:</strong> ${item.price}
                            </p>
                            <p className="text-sm ">
                                {[...Array(Math.floor(item.rating?.rate || 0))].map((_, index) => (
                                    <span key={index}>⭐</span>
                                ))}
                            </p>
                        {/* <button className='bg-gray-300 text-black rounded-md font-normal p-1'>
                            Add To Cart
                        </button> */}
                    </div>
                </Link>
            ))}
        </div>
    );
}
