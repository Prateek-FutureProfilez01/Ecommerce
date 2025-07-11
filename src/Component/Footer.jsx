import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-[#000000] text-gray-100 pt-[95px] pb-[60px] px-[20px] ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 a-6 text-left">

        {/* Customer Service */}
        <div>
          <h5 className="mb-2.5  uppercase">Customer Service</h5>
          <ul className="list-none">
            <li className="py-1"><Link to="">Help & Contact Us</Link></li>
            <li className="py-1"><Link to="">Return & Refund</Link></li>
            <li className="py-1"><Link to="">Online Store</Link></li>
            <li className="py-1"><Link to="">Terms & Conditions</Link></li>
          </ul>
        </div>


        <div>
          <h5 className="mb-2.5  uppercase">Company</h5>
          <ul className="list-none">
            <li className="py-1"><Link to="">What We Do</Link></li>
            <li className="py-1"><Link to="">Available Services</Link ></li>
            <li className="py-1"><Link to="">Latest Posts</Link></li>
            <li className="py-1"><Link to="">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="mb-2.5  uppercase">Social Media</h5>
          <ul className="list-none">
            <li className="py-1"><Link to="">Twitter</Link ></li>
            <li className="py-1"><Link to="">Instagram</Link ></li>
            <li className="py-1"><Link to="">Tumblr</Link ></li>
            <li className="py-1"><Link to="">Pinterest</Link ></li>
          </ul>
        </div>

        {/* Profile */}
        <div>
          <h5 className="mb-2.5  uppercase">Profile</h5>
          <ul className="list-none">
            <li className="py-1"><Link to="">My Account</Link ></li>
            <li className="py-1"><Link to="">Checkout</Link></li>
            <li className="py-1"><Link to="">Order Tracking</Link></li>
            <li className="py-1"><Link to="">Help & Support</Link></li>
          </ul>
        </div>

      </div>
      <div className="container">
        <div className="border-t-2 border-gray-500 py-4 px-4 text-left mt-5">
          <span className="text-sm text-white">
            © 2021 Qode Interactive, All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}