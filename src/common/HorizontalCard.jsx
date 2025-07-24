import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";


function HorizontalCard({ data }) {
    return (<>
        <div className="grid grid-cols-1  max-w-full">
            {data?.map((item) => (
                <Link
                    key={item.id}
                    to={`/mainCard/${item.id}`}
                >
                    <div className="flex justify-start flex-wrap  mt-5 mx-10 my-5">
                        <div>
                            <img
                                src={item.image}
                                alt={item.fullName}
                                className="h-[400px] w-[340px] rounded-xl mr-5"
                            />
                        </div>
                        <div className="">
                            <h2 className="flex text-3xl font-semibold pt-20 m-4 uppercase">{item.fullName}</h2>
                            <p className="text-xl text-slate-700 m-4">
                                ${item.description}
                            </p>
                            <p className="text-3xl font-bold text-slate-700 m-4 ">
                                ${item.price} USD
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <div className="w-full md:w-40">
                                    <button className='bg-black text-white rounded-lg font-normal px-4 py-2 m-4 hover:bg-white hover:text-black border-2 border-white hover:border-black'>
                                        Add To Cart
                                    </button> </div>

                                <div className="flex gap-3">
                                    <div className="border-2  border-black p-2  hover:bg-gray-900 hover:text-gray-100 rounded-lg">
                                        <IoEyeOutline size={22} /></div>
                                    <div className="border-2  border-black p-2  hover:bg-gray-900 hover:text-gray-100 rounded-lg ">
                                        <IoHeartOutline size={22} /></div>
                                    <div className="border-2  border-black p-2  hover:bg-gray-900 hover:text-gray-100 rounded-lg ">
                                        <MdCompareArrows size={22} /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div >
    </>);
}

export default HorizontalCard;