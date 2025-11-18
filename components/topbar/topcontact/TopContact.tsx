// components/TopBar.tsx
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TopBar() {
    return (
        <div className="max-w-7xl mx-auto relative bg-white p-3 border-b border-gray-100">
            <div className="flex items-center justify-between py-3 text-sm">

                {/* Left Section - Phone & Text */}
                <div className="fixed bg-fixed top-0 shadow-md right-0 left-0 z-20 px-32 py-3 bg-white flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FaPhoneAlt className="text-teal-600" />
                        <span>Need Professional Bookkeeper?</span>
                        <a
                            href="/contact"
                            className="text-teal-700 font-medium underline hover:text-teal-900"
                        >
                            Book Schedule Now
                        </a>
                    </div>

                    {/* Right Section - Social Icons */}
                    <div className="flex items-center space-x-4 text-teal-600">
                        <a href="#" className="hover:text-teal-800">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-teal-800">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-teal-800">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="hover:text-teal-800">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
