import Clock from "../../Assests/Clock.jpg"
export default function Middle() {
    return (
        <>
            <div className="flex md:flex-row flex-col bg-gray-100 ">
                <div className="flex flex-col justify-center w-4/5 md:px-[40px] md:py-[50px] px-[10px] ">
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
