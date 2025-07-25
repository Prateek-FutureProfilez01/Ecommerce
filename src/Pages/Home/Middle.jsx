import Clock from "../../Assests/Clock.jpg"
export default function Middle() {
    return (
        <>
            <div className="flex md:flex-row flex-col bg-gray-100 p-4 h-[435px] md:h-[400px] overflow-hidden md:max-h-[800px] justify-center items-center">
                <div className="flex flex-col justify-center max-w-[720px]  md:px-[20px] md:py-[15px]  md:pl-[60px] ">
                    <h2 className="text-3xl md:text-2xl text-left text-black uppercase">Digital Wall Clocks </h2>
                    <p className="text-gray-400 text-[24px] md:text-[18px] font-normal mt-2   md:mt-0">New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
                    </p>
                </div>
                <div className="flex items-end container">
                    <img src={Clock} alt="Clock" className=" object-cover  md:W-[500px] md:h-[550px] md:ml-[120px] md:-mb-44"  />
                </div>
            </div>
        </>


    )
}
