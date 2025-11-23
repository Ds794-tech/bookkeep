// components/BookkeepingSection.js

export default function BookkeepingSection() {
    return (
        <section className="md:flex relative md:container md:mx-auto md:my-10">
            {/* Left Side - Content */}

            <div className="w-full md:hidden block md:w-1/2 md:absolute md:right-0 md:top-0 md:bottom-0">
                <img
                    src="/images/people_conference.jpg"
                    alt="Team business meeting"
                    className="object-cover w-full md:rounded-2xl h-full"
                    style={{ maxHeight: 'calc(100vh - 90px)' }}
                />
            </div>

            <div className="w-full md:w-1/2 md:my-5">
                <div className="bg-[#0d1e3a] md:rounded-2xl h-full px-5 py-5 md:px-16 md:py-12 flex flex-col justify-center text-white">
                    <div className="mb-3">
                        <span className="text-2xl md:text-3xl font-semibold border-b-2 border-[#22cfcf] pb-1 inline-block">
                            Who We Are
                        </span>
                    </div>
                    <h1 className="text-xl md:text-2xl font-thin mb-5 leading-tight">
                        Redefining Accounting with Expertise, Efficiency & Technology
                    </h1>
                    <p className="text-[#718096] mb-12 leading-relaxed">
                        At Accuvibe Advisor, we deliver reliable and scalable outsourced accounting and bookkeeping services for CPA firms and businesses worldwide. With a team of certified professionals and advanced tools like QuickBooks, Xero, and Zoho Books, we ensure precision, compliance, and efficiency in every financial process.
                    </p>

                    {/* Progress Bars and Stats */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-1 font-semibold">
                            <span>Saving You Time</span>
                            <span>90%</span>
                        </div>
                        <div className="w-full h-2 rounded bg-[#08304f] mb-5">
                            <div className="h-2 rounded bg-[#22cfcf]" style={{ width: '90%' }}></div>
                        </div>

                        <div className="flex justify-between mb-1 font-semibold">
                            <span>Trusted Company</span>
                            <span>94%</span>
                        </div>
                        <div className="w-full h-2 rounded bg-[#08304f]">
                            <div className="h-2 rounded bg-[#22cfcf]" style={{ width: '94%' }}></div>
                        </div>
                    </div>

                    {/* Features List and Highlight Box */}
                    <div className="md:flex md:gap-8">
                        {/* Features List */}
                        <ul className="space-y-3 flex-1">
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-[#22cfcf]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Constant Improvement
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-[#22cfcf]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Commitment to Customers
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-[#22cfcf]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Best Quality You Can Get
                            </li>
                        </ul>

                        {/* Highlight Box */}
                        <div className="bg-[#22cfcf] text-[#0d1e3a] mt-10 md:mt-0 p-6 rounded flex-1 max-w-xs flex flex-col justify-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 14c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM16 14v4m-8-4v4m4 0a4 4 0 01-4-4m8 0a4 4 0 014-4"
                                />
                            </svg>
                            <p className="font-semibold text-lg">
                                You Run Your Business, We Will Handle Your Bookkeeping
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full hidden md:block md:w-1/2 md:absolute md:right-0 md:top-0 md:bottom-0">
                <img
                    src="/images/people_conference.jpg"
                    alt="Team business meeting"
                    className="object-cover w-full rounded-2xl h-full"
                    style={{ maxHeight: 'calc(100vh - 90px)' }}
                />
            </div>
        </section>
    );
}
