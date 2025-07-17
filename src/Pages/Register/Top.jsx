import { Link } from 'react-router-dom'
import { IoChevronForward } from "react-icons/io5";
function Top() {
    return (<>
        <div class="relative max-w mx-auto">
            <img class="h-60 w-full object-cover rounded-md " src="https://furnisy.vercel.app/images/page-header-img.webp" alt="Front" />
            <div class="absolute inset-0 items-center my-20">
                <h2 class="text-white text-3xl font-bold text-center">My Account</h2>
                <p ><Link to="/" className='flex items-center justify-center gap-3'>Home <IoChevronForward /></Link></p>
            </div>
        </div>
    </>);
}

export default Top;