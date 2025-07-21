import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (<>
        <div className="  mx-auto flex max-w items-center justify-between p-6 lg:px-8 h-22 bg-gray-100 text-base md:text-lg lg:text-xl ">
            <div className="relative flex items-center justify-between">
                <Link to={'/'}><img src={"https://depot.qodeinteractive.com/wp-content/themes/depot/assets/img/logo.png"} alt="Logo" /></Link>
            </div>
            <div className=" text-black font-normal  hidden md:block">
                <ul className="flex flex-wrap gap-3 ">
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/'}> Home </Link> </li>
                    {/* <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/page'}> Page </Link> </li> */}
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/shop'}> Shop </Link> </li>
                    {/* <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/potfolio'}> Potfolio </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/blog'}> Blog </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/element'}> Element </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to={'/chat'}> Chat </Link> </li> */}
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black uppercase">
                        <Link to="/register" >Register </Link> </li>
                </ul>
            </div>


            <div className={`flex lg:hidden ${menuOpen ? "hidden" : ""}`}>
                <button
                    type="button"
                    className="absolute right-[15px] top-[10px] z-[1] inline-flex items-center justify-center rounded-[3px] w-[48px] h-[45px] bg-gray-100 text-black hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-white mt-3 mr-5"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <RiMenu3Line size={30} />
                </button>
            </div>

            <div className={`lg:hidden  ${menuOpen ? "block" : "hidden"}`}>
                <button
                    type="button"
                    className="absolute right-[15px] top-[10px] z-[1] inline-flex items-center justify-center rounded-[3px] w-[48px] h-[45px] bg-gray-100 text-black hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-white mt-3 mr-5"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <IoCloseSharp size={30} />
                </button>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu "
                    className="absolute top-0 right-[15px] 11h-full pt-[60px] "
                >
                    <ul className="relative bg-[#222]  w-[200px] z-[9] h-full flex flex-col gap-[15px] font-manrope font-[600] text-[15px] md:text-[18px] lg:text-[20px] text-white px-[20px] pt-[20px] pb-[30px] rounded-[5px] ">
                        <li>
                            <Link to="/" className="block text-left">
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/page" className="block text-left">
                                Page
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/shop" className="block text-left">
                                Shop
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/potfolio" className="block text-left">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="block text-left">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/element" className="block text-left">
                                Element
                            </Link>
                        </li>
                        <li>
                            <Link to="/chat" className="block text-left">
                                Chat
                            </Link>
                        </li> */}

                        <li>
                            <Link to="/register" className="block text-left">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}
export default Header;