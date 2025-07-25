import React from 'react';
import { Link } from 'react-router-dom';
// import { FaStar } from "react-icons/fa6";
import RatingList from './RatingList';


export default function Card({ product }) {
    console.log("product" ,product)
    // const starColor = "#ccc";
    return (
        <div className="flex flex-wrap flex-row gap-6 justify-center py-8">
            {product?.map((item) => (
                <Link
                    key={item.id}
                    to={`/mainCard/${item.id}`}

                >
                    <div className=" flex items-center justify-start gap-2 mt-8 ">
                        <img
                            src={item.image}
                            alt={item.fullName}
                            className="h-[400px] object-cover w-[340px] rounded-xl bg-transparent "
                        />
                    </div>

                    <div className="py-10 space-y-2 text-start ">
                        <h2 className="text-lg font-semibold text-slate-800 line-clamp-2 uppercase">{item.fullName}</h2>

                        {/* <p className="text-sm ">
                                {[...Array(Math.floor( || 0))].map((_, index) => (
                                    <span key={index}>⭐</span>
                                ))}
                            </p> */}
                        <p className="text-base text-slate-700">
                            ${item.price}
                        </p>
                        <RatingList value={item.rating} className="" />

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
