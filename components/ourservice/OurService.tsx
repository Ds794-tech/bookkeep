// // components/ServicesSection.js

// import PartnerSlider from "../partnerSection/PartnerSection";

// export default function ServicesSection() {
//     return (
//         <section className="container mx-auto px-4 py-12">
//             {/* Header */}
//             <div className="flex justify-center mb-10">
//                 <div className="text-center">
//                     <div>
//                         <p className="text-[#1387A4] text-2xl font-semibold border-b-4 border-[#1387A4] inline-block mb-4">
//                             Why Choose Us
//                         </p>
//                         <h2 className="text-3xl font-thin py-2 text-gray-900">Trusted by 2,000+ Businesses for Reliable Accounting & Bookkeeping Solutions</h2>
//                     </div>
//                     <p className="text-gray-600 py-3 md:mt-0 max-w-4xl mx-auto">
//                         At Accuvibe Advisor, we combine professional expertise with modern accounting technology to help businesses and CPA firms simplify financial management. From bookkeeping to tax preparation, our dedicated offshore teams ensure accuracy, transparency, and efficiency in every process.
//                     </p>
//                     {/* <button className="bg-[#1387A4] text-white px-5 py-2 rounded-md mt-6 md:mt-0 hover:bg-[#10708e] transition">
//                         All Services
//                     </button> */}
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     <h3>Experience the Accuvibe Advantage:</h3>
//                     <ul>
//                         <li>•	Certified Accountants — Experienced professionals delivering global-standard accounting.</li>
//                         <li>•	Free Initial Consultation — Understand your needs before you commit.</li>
//                         <li>•	Save Valuable Time — Focus on your business while we manage your books.</li>
//                         <li>•	Unmatched Service Quality — Consistent accuracy, compliance, and performance.</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <PartnerSlider />
//                 </div>
//             </div>


//             {/* Services Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
//                 {/* Service Card 1 */}
//                 <div className="bg-white shadow-md rounded-md overflow-hidden">
//                     <div className="h-60 w-full overflow-hidden">
//                         <img
//                             src="/images/strategy.jpg"
//                             alt="Online Bookkeeping"
//                             className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="p-6 text-center bg-white">
//                         <div className="text-[#1387A4] mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-10 w-10 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                 <circle cx="12" cy="12" r="10" />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-lg mb-2">Online Bookkeeping</h3>
//                         <p className="text-gray-600 mb-4 text-sm px-2">
//                             Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
//                         </p>
//                         <a
//                             href="#"
//                             className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                         >
//                             Read More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Service Card 2 */}
//                 <div className="bg-white shadow-md rounded-md overflow-hidden">
//                     <div className="h-60 w-full overflow-hidden">
//                         <img
//                             src="/images/tax.jpg"
//                             alt="Tax Preparation"
//                             className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="p-6 text-center">
//                         <div className="text-[#1387A4] mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-10 w-10 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                 <circle cx="12" cy="12" r="10" />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-lg mb-2">Tax Preparation</h3>
//                         <p className="text-gray-600 mb-4 text-sm px-2">
//                             Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
//                         </p>
//                         <a
//                             href="#"
//                             className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                         >
//                             Read More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Service Card 3 */}
//                 <div className="bg-white shadow-md rounded-md overflow-hidden">
//                     <div className="h-60 w-full overflow-hidden">
//                         <img
//                             src="/images/financial.jpg"
//                             alt="Financial Planning"
//                             className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="p-6 text-center">
//                         <div className="text-[#1387A4] mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-10 w-10 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                 <circle cx="12" cy="12" r="10" />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-lg mb-2">Financial Planning</h3>
//                         <p className="text-gray-600 mb-4 text-sm px-2">
//                             Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
//                         </p>
//                         <a
//                             href="#"
//                             className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                         >
//                             Read More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 <div className="bg-white shadow-md rounded-md overflow-hidden">
//                     <div className="h-60 w-full overflow-hidden">
//                         <img
//                             src="/images/financial.jpg"
//                             alt="Financial Planning"
//                             className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="p-6 text-center">
//                         <div className="text-[#1387A4] mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-10 w-10 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                 <circle cx="12" cy="12" r="10" />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-lg mb-2">Payroll Data Entry</h3>
//                         <p className="text-gray-600 mb-4 text-sm px-2">
//                             Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
//                         </p>
//                         <a
//                             href="#"
//                             className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                         >
//                             Read More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 <div className="bg-white shadow-md rounded-md overflow-hidden">
//                     <div className="h-60 w-full overflow-hidden">
//                         <img
//                             src="/images/financial.jpg"
//                             alt="Financial Planning"
//                             className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="p-6 text-center">
//                         <div className="text-[#1387A4] mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-10 w-10 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                 <circle cx="12" cy="12" r="10" />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-lg mb-2">Investment Planning</h3>
//                         <p className="text-gray-600 mb-4 text-sm px-2">
//                             Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
//                         </p>
//                         <a
//                             href="#"
//                             className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                         >
//                             Read More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>

//                 <div className="bg-white shadow-md rounded-md overflow-hidden">
//                     <div className="h-60 w-full overflow-hidden">
//                         <img
//                             src="/images/financial.jpg"
//                             alt="Financial Planning"
//                             className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="p-6 text-center">
//                         <div className="text-[#1387A4] mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-10 w-10 mx-auto"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                 <circle cx="12" cy="12" r="10" />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-lg mb-2">Accounts Outsourcing</h3>
//                         <p className="text-gray-600 mb-4 text-sm px-2">
//                             Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
//                         </p>
//                         <a
//                             href="#"
//                             className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                         >
//                             Read More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



// components/ServicesSection.js
// import PartnerSlider from "../partnerSection/PartnerSection";

// export default function ServicesSection() {
//     // const services = [
//     //     {
//     //         title: "Online Bookkeeping",
//     //         img: "/images/strategy.jpg",
//     //         desc: "Accurate, timely, and tech-enabled bookkeeping for small and mid-sized businesses.",
//     //     },
//     //     {
//     //         title: "Tax Preparation",
//     //         img: "/images/tax.jpg",
//     //         desc: "Simplify tax filing with professional CPA support and optimized processes.",
//     //     },
//     //     {
//     //         title: "Financial Planning",
//     //         img: "/images/financial.jpg",
//     //         desc: "Comprehensive financial strategies to achieve your long-term business goals.",
//     //     },
//     //     {
//     //         title: "Payroll Data Entry",
//     //         img: "/images/financial.jpg",
//     //         desc: "Efficient and confidential payroll management tailored to your organization.",
//     //     },
//     //     {
//     //         title: "Investment Planning",
//     //         img: "/images/financial.jpg",
//     //         desc: "Smart investment guidance to grow your business wealth responsibly.",
//     //     },
//     //     {
//     //         title: "Accounts Outsourcing",
//     //         img: "/images/financial.jpg",
//     //         desc: "Reliable and scalable accounting outsourcing for cost efficiency and accuracy.",
//     //     },
//     // ];

//     return (
//         <section className="container mx-auto px-4 py-16">
//             {/* Section Header */}
//             <div className="text-center mb-12">
//                 <p className="text-[#1387A4] text-2xl font-semibold border-b-4 border-[#1387A4] inline-block mb-4">
//                     Why Choose Us
//                 </p>
//                 <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-4xl mx-auto leading-snug">
//                     Trusted by 2,000+ Businesses for Reliable Accounting & Bookkeeping Solutions
//                 </h2>
//                 <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-base leading-relaxed">
//                     At Accuvibe Advisor, we combine professional expertise with modern accounting
//                     technology to help businesses and CPA firms simplify financial management. From
//                     bookkeeping to tax preparation, our dedicated offshore teams ensure accuracy,
//                     transparency, and efficiency in every process.
//                 </p>
//             </div>

//             {/* Advantage List */}
//             <div className="max-w-3xl mx-auto mb-16 text-left">
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">
//                     Experience the Accuvibe Advantage:
//                 </h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-700">
//                     <li>
//                         <span className="font-medium text-gray-900">Certified Accountants —</span> Experienced professionals delivering global-standard accounting.
//                     </li>
//                     <li>
//                         <span className="font-medium text-gray-900">Free Initial Consultation —</span> Understand your needs before you commit.
//                     </li>
//                     <li>
//                         <span className="font-medium text-gray-900">Save Valuable Time —</span> Focus on your business while we manage your books.
//                     </li>
//                     <li>
//                         <span className="font-medium text-gray-900">Unmatched Service Quality —</span> Consistent accuracy, compliance, and performance.
//                     </li>
//                 </ul>
//             </div>

//             {/* Partner Slider */}
//             <div className="mb-20">
//                 <PartnerSlider />
//             </div>

//             {/* Services Grid */}
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-0">
//                 {services.map((service, idx) => (
//                     <div
//                         key={idx}
//                         className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
//                     >
//                         <div className="h-56 w-full overflow-hidden">
//                             <img
//                                 src={service.img}
//                                 alt={service.title}
//                                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                                 loading="lazy"
//                             />
//                         </div>
//                         <div className="p-6 text-center">
//                             <div className="text-[#1387A4] mb-3">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-10 w-10 mx-auto"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01" />
//                                     <circle cx="12" cy="12" r="10" />
//                                 </svg>
//                             </div>
//                             <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
//                             <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
//                             <a
//                                 href="#"
//                                 className="text-[#1387A4] text-sm font-medium hover:underline inline-flex items-center justify-center"
//                             >
//                                 Read More
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="ml-1 h-4 w-4"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div> */}
//         </section>
//     );
// }


import PartnerSlider from "../partnerSection/PartnerSection";

export default function WhyChooseUs() {
    return (
        <section className="bg-gradient-to-b from-[#f7fafb] via-white to-[#eaf6f9] px-3 py-12 md:py-24 md:px-6 md:px-20 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10 md:mb-20">
                <h3 className="text-[#1387A4] text-xl md:text-2xl font-semibold inline-block border-b-4 border-[#1387A4] pb-1 mb-5">
                    Why Choose Us
                </h3>
                <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-5xl mx-auto">
                    Trusted by <span className="text-[#1387A4]">2,000+</span> Businesses Worldwide
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
                    At <span className="font-medium text-gray-900">Accuvibe Advisor</span>, we redefine financial outsourcing with
                    precision, transparency, and expertise. From startups to global firms, we empower businesses with
                    modern accounting and financial intelligence.
                </p>
            </div>

            {/* Advantage Section */}
            <div className="container mx-auto mb-28 grid md:grid-cols-2 gap-16 items-center">
                {/* Left Text */}
                <div data-aos="fade-right">
                    <h3 className="text-2xl text-center md:text-left md:text-3xl font-bold text-gray-900 mb-6">
                        Experience the <span className="text-[#1387A4]">Accuvibe Advantage</span>
                    </h3>
                    {/* <p className="text-gray-600 mb-8 text-lg">
                        We believe accounting should empower — not overwhelm — your business. That’s why our approach combines
                        technology, expertise, and personal attention for measurable results.
                    </p> */}
                    <ul className="space-y-5 text-gray-700 text-lg">
                        <li className="flex items-start">
                            <span className="text-[#1387A4] text-2xl mr-3">✓</span>
                            <span><strong>Certified Professionals</strong> — Our team of experts ensures global-standard compliance and accuracy.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#1387A4] text-2xl mr-3">✓</span>
                            <span><strong>Free Consultation</strong> — We tailor solutions that align with your exact business goals.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#1387A4] text-2xl mr-3">✓</span>
                            <span><strong>Time & Cost Efficiency</strong> — Streamlined systems that maximize ROI and reduce overhead.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#1387A4] text-2xl mr-3">✓</span>
                            <span><strong>Data Security & Transparency</strong> — Trusted systems with full confidentiality assurance.</span>
                        </li>
                    </ul>
                </div>

                {/* Right Image */}
                <div className="relative" data-aos="fade-left">
                    <img
                        src="/images/business_team.jpg"
                        alt="Professional Team"
                        className="rounded-3xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div id="partner" className="absolute -bottom-6 -left-6 bg-[#1387A4] text-white px-8 py-4 rounded-2xl shadow-xl">
                        <p className="text-lg font-semibold">20+ Years of Expertise</p>
                    </div>
                </div>
            </div>

            {/* Partner Section */}
            <div className="relative md:container md:mx-auto md:bg-white rounded-xl md:shadow-xl md:py-16">
                <div className="md:absolute -top-4 left-1/2 text-center transform md:-translate-x-1/2 bg-[#1387A4] text-white px-8 py-2 rounded-full text-lg font-medium">
                    Our Trusted Partners
                </div>

                {/* <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Our Global Partner Network
                </h3> */}
                <PartnerSlider />

                {/* <div className="text-center mt-12">
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We collaborate with industry-leading firms and technology partners to bring cutting-edge financial
                        efficiency and insight to your business.
                    </p>
                </div> */}
            </div>
        </section>
    );
}
