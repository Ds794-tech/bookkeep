import React from "react";
import { Landmark, Building2, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Layout from "../layout/Layout";


export default function ContactUs() {
    return (
        <Layout>
            <div className="md:flex md:justify-center md:items-start md:min-h-screen md:bg-gray-50 md:py-16">
                <div className="md:w-10/12 max-w-6xl bg-white md:rounded md:shadow-lg md:flex">
                    {/* Contact Form */}
                    <div className="text-2xl py-5 text-center block md:hidden font-semibold text-cyan-700 mb-2">
                        Contact Us
                    </div>
                    <div className="text-xl block text-center md:hidden font-bold text-gray-800 mb-3">
                        Get In Touch With Accuvibe Advisor
                    </div>
                    <div className="md:w-1/2 md:p-10 md:px-0 px-5 flex flex-col justify-center">
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-200 rounded outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-200 rounded outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <input
                                type="text"
                                placeholder="Your Subject"
                                className="w-full px-4 py-3 border border-gray-200 rounded outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-200 rounded outline-none focus:ring-2 focus:ring-cyan-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 bg-cyan-600 text-white font-semibold rounded hover:bg-cyan-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="md:w-1/2 px-5 py-5 md:px-0 md:py-0 md:p-10">
                        <div>
                            <div className="text-2xl hidden md:block font-semibold text-cyan-700 mb-2">
                                Contact Us
                            </div>
                            <div className="text-3xl hidden md:block font-bold text-gray-800 mb-3">
                                Get In Touch With Bizkeep
                            </div>
                            <p className="text-gray-500 mb-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                            <div className="md:flex mb-6">
                                <div className="mr-8 flex items-start">
                                    <div className="bg-cyan-600 text-white w-20 md:w-14 h-14 flex items-center justify-center rounded-lg text-2xl mr-3">
                                        {/* Office/Building Icon */}
                                        <Landmark />
                                    </div>
                                    <div className="ml-1 md:ml-0">
                                        <div className="font-bold text-lg text-gray-900">Denpasar</div>
                                        <div className="text-gray-600 text-sm">Jl. Raya Puputan No 142, Denpasar</div>
                                    </div>
                                </div>
                                <div className="flex items-start mt-5 md:mt-0">
                                    <div className="bg-cyan-600 text-white w-18 md:w-14 h-14 flex items-center justify-center rounded-lg text-2xl mr-3">
                                        <Building2 />
                                    </div>
                                    <div className="ml-1 md:ml-0">
                                        <div className="font-bold text-lg text-gray-900">Canggu</div>
                                        <div className="text-gray-600 text-sm">Jl. Pantai Batu Bolong No.69, Canggu</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:mr-8 flex items-start">
                                    <div className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center rounded-lg text-2xl md:mr-3">
                                        <Phone />
                                    </div>
                                    <div className="ml-5 md:ml-0">
                                        <div className="font-bold text-lg text-gray-900">Call Us</div>
                                        <div className="text-gray-600 text-sm">(021) 4582 - 3695</div>
                                    </div>
                                </div>
                                <div className="flex items-start mt-5 md:mt-0 md:ml-10">
                                    <div className="bg-cyan-600 text-white w-14 h-14 flex items-center justify-center rounded-lg text-2xl md:mr-3">
                                        <Mail />
                                    </div>
                                    <div className="ml-5 md:ml-0">
                                        <div className="font-bold text-lg text-gray-900">Email Information</div>
                                        <div className="text-gray-600 text-sm">support@domain.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-gray-800 mb-2 text-center md:text-start text-xl md:text-md mt-12 md:mt-0">Follow Our Social Media</div>
                            <div className="flex space-x-5 justify-center md:justify-start mt-5 md:mt-0">
                                <a href="#" className="text-cyan-600 text-2xl hover:text-cyan-800"><Facebook /></a>
                                <a href="#" className="text-cyan-600 text-2xl hover:text-cyan-800"><Twitter /></a>
                                <a href="#" className="text-cyan-600 text-2xl hover:text-cyan-800"><Instagram /></a>
                                <a href="#" className="text-cyan-600 text-2xl hover:text-cyan-800"><Linkedin /></a>
                                <a href="#" className="text-cyan-600 text-2xl hover:text-cyan-800"><Youtube /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
