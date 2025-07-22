import Chair from '../../Json/chair.json'
import HorizontalCard from "../../common/HorizontalCard";
import { useState } from 'react';
import Card from '../../common/Card';
import PrivateRoute from '../privateRoutre';
import { BsGridFill, BsList } from 'react-icons/bs';



function Shop() {

    const [key, setKey] = useState("card");
    return (<PrivateRoute>
        <div className="flex justify-between  flex-wrap md:items-center md:px-12 px-8 py-8  md:py-4 ">
            <div>
                {/* <div className="relative">
                    <div className="absolute inset-y-0 end-2 flex items-center ps-3 ">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block py-2 ps-4 w-[280px] text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="Search" required />
                </div> */}
            </div>
            <div className="flex md:justify-end md:items-end md:flex-wrap justify-center items-center text-center gap-4 mt-3 md:mr-8">

                <div className='cursor-pointer' onClick={() => { setKey("card") }}>
                    <BsGridFill size={36} />
                </div>
                <div className='cursor-pointer' onClick={() => { setKey("HorizontalCard") }}>
                    <BsList size={36} />
                </div>
                <div className="relative">
                    <select id="filter-select" class="block appearance-none w-fulltext-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline ">
                        <option value="">Default Sorting</option>
                        <option value="option1">Short by Popularity</option>
                        <option value="option2">Short By Avg Rating</option>
                        <option value="option3">Short By Latest</option>
                        <option value="option3">Short By Price:High to Low</option>
                        <option value="option3">Short By Price:Low to High</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
        </div>

        {key === "card" ? (
            <Card product={Chair} className="border-5" />
        ) : (
            <HorizontalCard data={Chair} className="border-5" />
        )}
    </PrivateRoute>);
}

export default Shop;