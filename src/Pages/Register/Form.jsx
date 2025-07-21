import { useState } from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";


function Form() {
    const [input, setInputs] = useState({
            email: "",
            password: ""
        })
        const handleChanges = (event) => {
            const { name, value } = event.target;
            setInputs(prev => ({ ...prev, [name]: value }));
        };
    
        const isValidEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if (!input?.email.trim()) {
                alert("Email field cannot be empty.");
                return;
            }
               if (!isValidEmail(input?.email)) {
          alert("Please enter a valid email address.");
          return;
        }
            localStorage.setItem('formData', JSON.stringify(input));
            alert("Login Successfully")
        }
        
     
    return (<>
        <div className="flex md:flex-row flex-col bg-white ">
            <div className="md:w-1/2 p-20  bg-[#fafafa] ">
                <h2 className="lg:text-2xl text-xl font-semibold text-gray-1-foreground block lg:mb-7.5 mb-5 Bebas-font text-left">Login your Account</h2>
                <form className=" mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label for="email" className="mb-2 text-lg font-medium text-[#4d4c4b]">Your email<spam className="gap-1 text-red-600">*</spam></label>
                        <input type="email" className="flex w-full rounded-md bg-transparent text-base py-3 px-5 border-[#9ca3af] border-[1.5px] placeholder:text-[#9ca3af] text-gray-1-foreground mt-2.5" placeholder="name@flowbite.com" required onChange={handleChanges} />
                        
                    </div>
                    <div className="mb-5">
                        <label for="password" className="mb-2 text-lg font-medium text-[#4d4c4b]">Your password<spam className="gap-1 text-red-600">*</spam></label>
                        <input type="password" className="flex w-full rounded-md bg-transparent text-base py-3 px-5 border-[#9ca3af] border-[1.5px] placeholder:text-[#9ca3af] text-gray-1-foreground mt-2.5" required placeholder="Password" onChange={handleChanges} />
                    </div>
                    <div className="flex justify-between  mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-6 h-6 border border-gray-300 rounded-[4px]  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />

                            <label for="remember" className="ms-2 text-lg text-gray-500 dark:text-gray-300 font-sans font-medium">Remember Me </label>
                        </div>

                        <Link to='#' className="text-lg hover:underline">Lost Your Password?</Link>


                    </div>
                    <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg leading-normal font-bold rounded-lg border-2 transition-all duration-500 text-white bg-black shadow hover:bg-transparent  hover:text-secondary-foreground hover:bg-white hover:text-black hover:border-black  lg:px-10 md:px-8 px-6 py-3 w-full lg:py-[11px] lg:text-lg mt-7.5">Login</button>

                    <p className="flex justify-center text-xl p-4 text-gray-500">or Login With</p>

                    <div className="flex justify-center  md:flex-row flex-col gap-10" >
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            {/* Facebook Button */}
                            <button className="flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white text-black font-semibold px-6 py-3 md:py-4 md:px-10 text-base md:text-sm w-full md:w-auto">
                                <GrFacebookOption className="text-blue-600 text-2xl" />
                                <span>Facebook</span>
                            </button>

                            {/* Google Button */}
                            <button className="flex items-center justify-center gap-2 rounded-md border-2 border-black bg-white text-black font-semibold px-6 py-3 md:py-4 md:px-10 text-base md:text-sm w-full md:w-auto">
                                <FcGoogle className="text-2xl" />
                                <span>Google</span>
                            </button>
                        </div>

                    </div>
                    <p className="flex justify-center text-xl p-4 text-gray-500">New customer? <Link to='/register' className="ml-1"> Sign Up</Link> </p>
                </form>
            </div>
            <div className="md:w-1/2">
                <img src='https://furnisy.vercel.app/_next/image?url=%2Fimages%2Fcontact-img.webp&w=1920&q=75' alt="Seanery" className=" object-cover mr-0 " />
            </div>


        </div>
    </>
    )
}

export default Form;