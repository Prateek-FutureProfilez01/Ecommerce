import Clock from "../../Assests/Clock.jpg"
export default function Middle() {
    return (
        <>
            <div className="flex bg-gray-100 p-[15px]">
                <div className="flex flex-col justify-center w-1/2 px-[40px] py-[50px]">
                    <h2 className="text-2xl text-left text-black">Wodern Clock </h2>
                    <p className="text-gray-400 font-normal">New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
                    </p>
                </div>
                <div className="flex items-end w-1/2 ">
                    <img src={Clock} alt="Clock" className=" object-cover " />
                </div>
            </div>
        </>


    )
}
