import React from 'react';
import { Link } from 'react-router-dom';
// import { FaStar } from "react-icons/fa6";
import RatingList from './RatingList';


export default function Card({ product }) {
    // const starColor = "#ccc";
    return (
        <div className="flex flex-wrap gap-6 justify-center py-6 px-6">
            {product?.map((item) => (
                <Link
                    key={item.id}
                    to={`#`}
                    className="w-80 overflow-hidden transition-transform "
                >
                    <div className="h-80 flex items-center justify-center p-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full object-cover w-[260px]"
                        />
                    </div>

                    <div className="p-4 space-y-2 text-center ">
                        <h2 className="text-lg font-semibold text-slate-800 line-clamp-2 uppercase">{item.title}</h2>

                        {/* <p className="text-sm ">
                                {[...Array(Math.floor( || 0))].map((_, index) => (
                                    <span key={index}>⭐</span>
                                ))}
                            </p> */}
                         <RatingList value={item.rating?.rate}/>

                    <p className="text-base text-slate-700">
                        ${item.price}
                    </p>

                    {/* <button className='bg-gray-300 text-black rounded-md font-normal p-1'>
                            Add To Cart
                        </button> */}
                </div>
                </Link>
    ))
}
        </div >
    );
}
