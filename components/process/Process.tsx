import { FaCalendarAlt, FaUsers, FaHandshake } from 'react-icons/fa';

export default function ProcessSection() {
    return (
        <section className="md:container md:mx-auto pt-16 px-3 md:pb-10 md:px-4">
            {/* Title & Text */}
            <div className="text-center md:mb-12">
                <div className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Process</div>
                <div className="w-16 h-1 mx-auto bg-blue-500 mb-2"></div>
                <h2 className="text-xl md:text-4xl font-bold text-blue-900 mb-3">Simple Steps to Get Started with Accuvibe Advisor</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Outsourcing your accounting has never been easier. We make the process simple, transparent, and completely secure — so you can focus on your business while we handle the numbers.
                </p>
            </div>
            {/* Steps numbers with dashed border */}
            <div className="flex justify-between items-center relative mb-10">
                <div className="hidden md:block flex-1 flex justify-center">
                    <span className="bg-teal-500 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                        01.
                    </span>
                </div>
                {/* <div className="absolute top-1/2 left-[15%] right-[15%] border-t-2 border-dashed border-gray-300 z-0"></div> */}
                <div className="hidden md:block flex-1 flex justify-center">
                    <span className="bg-teal-500 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                        02.
                    </span>
                </div>
                <div className="hidden md:block flex-1 flex justify-center">
                    <span className="bg-teal-500 text-white font-bold text-xl w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                        03.
                    </span>
                </div>
            </div>
            {/* Steps cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-xl rounded-xl px-4 py-5 md:py-10 md:px-6 text-center flex flex-col items-center">
                    <div className="md:hidden block flex-1 flex pb-3 justify-center">
                        <span className="text-teal-500 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center">
                            1.
                        </span>
                    </div>
                    <FaCalendarAlt className="text-teal-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Schedule a Call</h3>
                    <p className="text-gray-600">Book a quick consultation with our accounting experts to discuss your firm’s specific needs and workflow preferences.</p>
                </div>
                <div className="bg-blue-900 shadow-xl rounded-xl py-10 px-6 text-center flex flex-col items-center">
                    <div className="md:hidden block flex-1 flex pb-3 justify-center">
                        <span className="text-teal-500 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center">
                            2.
                        </span>
                    </div>
                    <FaUsers className="text-teal-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Get Personalized Consultation</h3>
                    <p className="text-gray-300">Our specialists will evaluate your requirements and create a customized outsourcing plan — ensuring smooth onboarding and efficient operations.</p>
                </div>
                <div className="bg-white shadow-xl rounded-xl py-10 px-6 text-center flex flex-col items-center">
                    <div className="md:hidden block flex-1 flex pb-3 justify-center">
                        <span className="text-teal-500 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center">
                            3.
                        </span>
                    </div>
                    <FaHandshake className="text-teal-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Start & See Results</h3>
                    <p className="text-gray-600">Once everything is set, our dedicated offshore team begins managing your accounting tasks with precision, timeliness, and full compliance.</p>
                </div>
            </div>
        </section>
    );
}
