import { Link } from "react-router-dom";


function Header() {
    return (<>
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-22 bg-gray-100">
            <div className="">
                <img className="" src={"https://depot.qodeinteractive.com/wp-content/themes/depot/assets/img/logo.png"} alt="Logo" />
            </div>
            <div className=" text-black font-normal">
                <ul className="flex flex-wrap gap-3 ">
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/'}> Home </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/page'}> Page </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/shop'}> Shop </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/potfolio'}> Potfolio </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/blog'}> Blog </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/element'}> Element </Link> </li>
                    <li className="rounded-md  px-3 py-2 text-sm font-medium text-black">
                        <Link to={'/chat'}> Chat </Link> </li>
                </ul>
            </div>
        </div>
    </>);
}
export default Header;