// // app/why-accuvibe/page.jsx

// import Layout from "@/app/layout/Layout";

// export default function WhyAccuvibe() {
//     return (
//         <Layout>
//             <div className="w-full">

//                 {/* Hero Section */}
//                 <section className="relative bg-[url('/images/managers-working.jpg')] bg-cover bg-center py-24 text-center text-white">
//                     <div className="absolute inset-0 bg-black/60"></div>
//                     <div className="overlay"></div>
//                     <h1 className="relative text-4xl font-semibold z-2">Why Accuvibe Advisor</h1>
//                     <p className="relative mt-3 z-2">Empower your accounting practice with trusted offshore experts.</p>
//                 </section>

//                 {/* Intro Section */}
//                 <section className="container mx-auto py-16 grid md:grid-cols-2 gap-10 items-center">
//                     <img src="/images/business_team.jpg" alt="Accuvibe Team" className="rounded-lg shadow" />
//                     <div>
//                         <h2 className="text-2xl font-semibold mb-4">Experience the Accuvibe Difference</h2>
//                         <p className="text-gray-600 leading-relaxed mb-6">
//                             Our certified professionals ensure precision, efficiency, and accuracy across bookkeeping,
//                             payroll, tax, and audit support — enabling your firm to scale confidently and deliver
//                             exceptional value to clients.
//                         </p>

//                         <ul className="space-y-3 text-gray-700">
//                             <li>✅ Timely, accurate, and dependable delivery</li>
//                             <li>✅ A decade of trusted accounting excellence</li>
//                             <li>✅ Hiring models that fit your workflow (FTE / Portfolio / On-Demand)</li>
//                             <li>✅ 50+ certified accountants trained in global standards</li>
//                             <li>✅ Expertise in QuickBooks, Xero, Zoho Books, SAP & more</li>
//                             <li>✅ Reduce operational costs without compromising quality</li>
//                         </ul>
//                     </div>
//                 </section>

//                 {/* Security & Quality Cards */}
//                 <section className="container mx-auto py-12 grid md:grid-cols-2 gap-6">
//                     <div className="p-6 rounded-lg border shadow-sm">
//                         <h3 className="text-lg font-semibold mb-2">Your Data is Safe. Your Accounting is Smarter.</h3>
//                         <p className="text-gray-600">
//                             We follow strict confidentiality and compliance protocols to ensure accuracy,
//                             reliability, and complete peace of mind.
//                         </p>
//                     </div>

//                     <div className="p-6 rounded-lg border shadow-sm">
//                         <h3 className="text-lg font-semibold mb-2">Protected. Encrypted. Trusted — Always.</h3>
//                         <p className="text-gray-600">
//                             256-bit encryption · ISO-certified offices · 24/7 surveillance · Zero data breaches since inception.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Numbers Section */}
//                 <section className="bg-blue-50 py-14 text-center">
//                     <h2 className="text-2xl font-semibold mb-6">The Results Speak for Themselves</h2>
//                     <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
//                         {[
//                             ["45+", "Dedicated Accountants"],
//                             ["10+ Years", "Experience in Accounting"],
//                             ["20+", "Countries Served"],
//                             ["100+", "CPA Firms Supported"],
//                         ].map(([value, label]) => (
//                             <div key={value} className="bg-white p-6 rounded-lg shadow-sm">
//                                 <p className="text-2xl font-bold text-blue-600">{value}</p>
//                                 <p className="text-gray-600 mt-1">{label}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Challenges & Solutions */}
//                 <section className="container mx-auto py-16">
//                     <h2 className="text-2xl font-semibold text-center mb-10">Challenges You Face & How We Solve Them</h2>

//                     <div className="grid md:grid-cols-2 gap-2">
//                         <div>
//                             <h3 className="font-bold mb-2">Common Challenges</h3>
//                             <ul className="space-y-2 text-gray-700">
//                                 <li>• Capacity to Scale</li>
//                                 <li>• High Overhead Costs</li>
//                                 <li>• Undercharging Clients</li>
//                                 <li>• Lack of Quality Control</li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h3 className="font-bold mb-2">Our Proven Solutions</h3>
//                             <ul className="space-y-2 text-gray-700">
//                                 <li>• Guaranteed Cost Savings</li>
//                                 <li>• Scale Seamlessly</li>
//                                 <li>• Ensure Accuracy & Quality</li>
//                                 <li>• Unlock New Service Revenue</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Industries Grid */}
//                 <section className="bg-gray-50 py-16">
//                     <div className="container mx-auto">
//                         <h2 className="text-2xl font-semibold text-center mb-10">
//                             Accounting Expertise Across Industries
//                         </h2>

//                         <div className="grid md:grid-cols-4 gap-6">
//                             {[
//                                 { domain: "Real Estate", description: 'From residential to commercial projects, our accounting experts deliver precise financial tracking, budgeting, and reporting tailored for the real estate sector.' },
//                                 { domain: "Healthcare", description: 'Manage healthcare finances with confidence. Our specialists ensure accurate bookkeeping, compliance, and reporting designed for hospitals, clinics, and medical practitioners.' },
//                                 { domain: "Hotels & Restaurants", description: 'From order to delivery, we streamline financial operations for hotels, cafés, and restaurants — ensuring accurate cost tracking and profit management.' },
//                                 { domain: "Retail & Wholesale", description: 'Simplify inventory, vendor payments, and tax filings. We support retail chains and wholesalers in maintaining profitability and compliance across every transaction.' },
//                                 { domain: "Shipping & Logistics", description: 'Manage your global operations seamlessly. We handle your accounting, billing, and tax compliance with precision, so you can focus on efficient logistics management.' },
//                                 { domain: "Agriculture", description: 'Simplify farm accounting and financial management with our expert support. From expense tracking to profitability insights, we help you grow smarter.' },
//                                 { domain: "Manufacturing", description: 'Gain full visibility into your production costs and profits. Our accounting professionals ensure every process is documented, accurate, and optimized for growth.' },
//                                 { domain: "E-Commerce", description: 'Scale your online business effortlessly. We streamline bookkeeping, automate reconciliations, and ensure tax-ready compliance for every digital transaction.' }
//                             ].map((item) => (
//                                 <div key={item.domain} className="p-6 bg-white rounded-lg shadow-lg border">
//                                     <p className="font-bold mb-5 text-2xl">{item.domain}</p>
//                                     <div>
//                                         <p>{item.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Outsourcing Process */}
//                 <section className="container mx-auto py-16 text-center">
//                     <h2 className="text-2xl font-semibold mb-10">How We Work — 5 Step Process</h2>

//                     <ol className="space-y-4 text-gray-700 max-w-3xl mx-auto text-left">
//                         <li>1. Understanding Your Requirements</li>
//                         <li>2. SLA Setup</li>
//                         <li>3. Contract Agreement</li>
//                         <li>4. Service Commencement</li>
//                         <li>5. Weekly Review Meetings</li>
//                     </ol>
//                 </section>

//             </div>
//         </Layout>
//     );
// }

'use client'

import Layout from "@/app/layout/Layout";
import { aboutUsData } from "@/app/utils";
import { useParams } from "next/navigation";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import Slider from "react-slick";

type EngagementSub = {
    title: string;
    description?: string;
    whyChoose?: string[];
    cta?: string;
};

interface FlexibleHiringStep {
    title: string;
    content: string;
}

/* Explicit types for the about data structure used throughout the component */
type HeroSection = {
    title: string;
    subtitle?: string;
};

type ExperienceSection = {
    title: string;
    description?: string;
    highlights?: string[];
};

type SecurityBox = {
    title: string;
    description?: string;
};

type SecuritySection = {
    leftBox: SecurityBox;
    rightBox: SecurityBox;
};

type Stat = {
    value: string | number;
    label: string;

    heading: string;
    items?: ReactNode[];
};

type ChallengeColumn = {
    heading: string;
    items?: ReactNode[];
};

type ChallengesSection = {
    title: string;
    columns?: ChallengeColumn[];
};

type IndustryCard = {
    title: string;
    description: string;
};

type IndustriesSection = {
    title: string;
    cards: IndustryCard[];
};

type ProcessStep = {
    title: string;
    content: string;
};

type ProcessSection = {
    title: string;
    description?: string;
    subTitle?: string;
    subDescription?: string;
    steps: ProcessStep[];
};

type FlexibleHiring = {
    title: string;
    description?: string;
    steps: FlexibleHiringStep[];
};

type OutsourceFeature = {
    title: string;
    content: string;
};

type OutsourceModel = {
    title: string;
    description?: string;
    features: OutsourceFeature[];
    cta?: string;
};

type EngagementSection = {
    title: string;
    description?: string;
    subSections: EngagementSub[];
};

/* ResultsSection was missing — define the shape used in the component */
type ResultsSection = {
    title: string;
    stats: { value: string | number; label: string }[];
};

type About = {
    heroSection?: HeroSection;
    experienceSection?: ExperienceSection;
    securitySection?: SecuritySection;
    resultsSection?: ResultsSection;
    challengesSection?: ChallengesSection;
    industriesSection?: IndustriesSection;
    processSection?: ProcessSection;
    flexibleHiring?: FlexibleHiring;
    outsourceModel?: OutsourceModel;
    engagementSection?: EngagementSection;
};


export default function AboutSection() {

    const [selectedAbout, setSelectedAbout] = useState<About | null>(null);

    const { id } = useParams();
    const firstParam = Array.isArray(id) ? id[0] : id;
    const str = firstParam ?? "";

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
            { breakpoint: 320, settings: { slidesToShow: 1 } },
        ],
    };

    useEffect(() => {
        const key = str as keyof typeof aboutUsData;
        const getAboutData = aboutUsData[key];
        if (getAboutData) {
            setSelectedAbout(getAboutData);
            console.log("Loaded About Section:", getAboutData);
        }
    }, [id]);

    console.log("Rendering About Section:", selectedAbout);
    if (!selectedAbout) return <p className="text-center py-20">Loading...</p>;
    return (
        <Layout>
            <div className="md:space-y-20">
                {/* Hero Section */}
                {selectedAbout.heroSection && (
                    <section
                        className="bg-gray-50 text-center md:py-16 relative bg-[url('/images/managers-working.jpg')] bg-cover bg-center text-white">
                        <div className="text-white py-20 px-4">
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="overlay"></div>
                            <h1 className="text-2xl md:text-4xl font-semibold mb-3 relative font-semibold z-2">
                                {selectedAbout.heroSection.title}
                            </h1>
                            <p className="max-w-3xl mx-auto md:text-lg relative mt-3 z-2">
                                {selectedAbout.heroSection.subtitle}
                            </p>
                        </div>
                    </section>
                )}

                {/* Experience Section */}
                {selectedAbout.experienceSection && (
                    <section className="container mx-auto mt-2 md:mt-0 md:px-4 grid md:grid-cols-2">
                        <div>
                            <img src="/images/business_team.jpg" alt="Accuvibe Team" className="md:rounded-lg md:shadow w-full" />
                        </div>
                        <div className="px-4 md:px-0">
                            <h2 className="text-2xl mt-5 md:mt-0 md:text-4xl font-semibold mb-5 md:mb-10  title-main">
                                {selectedAbout.experienceSection.title}
                            </h2>
                            <p className="text-gray-600 mb-5 md:mb-10 md:text-lg leading-relaxed">
                                {selectedAbout.experienceSection.description}
                            </p>
                            {selectedAbout.experienceSection.highlights && selectedAbout.experienceSection.highlights.length > 0 && (
                                <ul className="space-y-2 text-gray-700 text-sm md:text-lg list-disc list-inside">
                                    {selectedAbout.experienceSection.highlights.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </section>
                )}

                {selectedAbout?.securitySection && (
                    <section className="max-w-7xl mx-auto py-5 md:py-10 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* LEFT BOX */}
                            <div className="group bg-blue-100 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="mb-5 flex justify-center">
                                    <svg
                                        className="w-12 h-12 text-blue-600 group-hover:scale-105 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-center title-main text-gray-900 mb-3">
                                    {selectedAbout.securitySection.leftBox.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-center">
                                    {selectedAbout.securitySection.leftBox.description}
                                </p>
                            </div>

                            {/* RIGHT BOX */}
                            <div className="group bg-green-200 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="mb-5 flex justify-center">
                                    <svg
                                        className="w-12 h-12 text-green-600 group-hover:scale-105 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2l4 -4m6 2a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-center title-main text-gray-900 mb-3">
                                    {selectedAbout.securitySection.rightBox.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-center">
                                    {selectedAbout.securitySection.rightBox.description}
                                </p>
                            </div>

                        </div>
                    </section>
                )
                }

                {selectedAbout.resultsSection && <section className="bg-blue-50 py-10 px-10 md:py-20 md:px-32 text-center">
                    <h2 className="text-2xl font-semibold mb-10 md:mb-20 title-main">{selectedAbout.resultsSection.title}</h2>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                        {selectedAbout.resultsSection.stats.map(({ value, label }: { value: string | number; label: string }) => (
                            <div key={value} className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-2xl font-bold text-blue-600">{value}</p>
                                <p className="text-gray-600 mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                </section>}

                {selectedAbout.challengesSection && (
                    <section className="max-w-6xl mx-auto px-6">

                        {/* Title */}
                        <h2 className="text-2xl md:text-4xl font-bold title-main text-center text-gray-900 mb-10 md:mb-20">
                            {selectedAbout.challengesSection.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {(selectedAbout.challengesSection?.columns ?? []).map(
                                ({ heading, items }: { heading: string; items?: ReactNode[] }) => (
                                    <div
                                        key={heading}
                                        className="bg-white p-3 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                                    >
                                        {/* Card Header + Icon */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 6v6l4 2m6-2A10 10 0 1 1 2 12a10 10 0 0 1 20 0z"
                                                    />
                                                </svg>
                                            </div>

                                            <h3 className="text-lg md:text-xl font-semibold title-main text-gray-900">
                                                {heading}
                                            </h3>
                                        </div>

                                        {/* List */}
                                        <ul className="space-y-3">
                                            {(items ?? []).map((list: ReactNode, idx: number) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-gray-700 leading-relaxed"
                                                >
                                                    <span className="text-blue-500 text-md   md:text-lg">•</span>
                                                    {list}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            )}

                        </div>
                    </section>
                )}


                {selectedAbout.industriesSection && <section className="bg-gray-50 py-10 md:py-20">
                    <div className="container mx-auto">
                        <h2 className="text-2xl md:text-4xl font-semibold text-center title-main mb-10 md:mb-20">
                            {selectedAbout.industriesSection.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mb-10">
                            <Slider {...settings}>
                                {selectedAbout.industriesSection.cards.map(({ title, description }: { title: string; description: string }) => (
                                    <div key={title} className="px-4">  {/* ← GAP between cards */}
                                        <div className="h-full w-full p-6 bg-white rounded-xl shadow-lg border flex flex-col justify-start md:min-h-[200px] md:max-h-[260px]">
                                            <p className="font-bold mb-4 text-center text-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">{title}</p>
                                            <p className="text-gray-700 text-center">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>}

                {/* Process Section */}
                {selectedAbout.processSection && (
                    <section className="md:py-24 bg-gray-50">
                        <div className="container mx-auto md:px-6">
                            <div className="py-10 md:py-20">
                                {/* Main Title */}
                                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-6 title-main">
                                    {selectedAbout.processSection.title}
                                </h3>

                                {/* Main Description */}
                                <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center md:mb-14 leading-relaxed">
                                    {selectedAbout.processSection.description}
                                </p>
                            </div>
                            {/* Subtitle */}
                            <h4 className="text-2xl md:text-3xl px-2 font-semibold text-gray-800 text-center mb-3 title-main">
                                {selectedAbout.processSection.subTitle}
                            </h4>

                            {/* Sub Description */}
                            <p className="text-gray-600 max-w-6xl px-2 mx-auto text-center mb-16 leading-relaxed">
                                {selectedAbout.processSection.subDescription}
                            </p>

                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <Slider {...settings}>
                                    {selectedAbout.processSection.steps.map((step: { title: string | number | bigint | boolean | ReactElement<unknown, string> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string> | Iterable<ReactNode> | null | undefined> | null | undefined; content: string | number | bigint | boolean | ReactElement<unknown, string> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: number) => (
                                        <div key={index} className="px-5 py-5 md:h-[300px]">
                                            <div
                                                className="bg-white rounded-2xl p-8 h-full w-full md:min-h-[200px] md:max-h-[260px] shadow-sm border 
                                   hover:shadow-xl hover:-translate-y-2 
                                   transition-all duration-300 cursor-default"
                                            >
                                                {/* Step Title */}
                                                <h5 className="text-blue-600 font-bold md:text-2xl mb-4">
                                                    {step.title}
                                                </h5>

                                                {/* Description */}
                                                <p className="text-gray-700 leading-relaxed text-[15px]">
                                                    {step.content}
                                                </p>

                                                {/* Bottom Accent */}
                                                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-300 
                                        rounded-full mt-6"></div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </section>
                )}



                {/* Flexible Hiring Section */}
                {selectedAbout?.flexibleHiring && (
                    <section className="py-10 md:py-24 bg-gray-50">
                        <div className="container mx-auto px-2 md:px-6">

                            {/* Section Title */}
                            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
                                {selectedAbout.flexibleHiring.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed">
                                {selectedAbout.flexibleHiring.description}
                            </p>

                            {/* Cards */}
                            <div className="grid md:grid-cols-3 gap-10">
                                {(selectedAbout.flexibleHiring.steps as FlexibleHiringStep[]).map((step: FlexibleHiringStep, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-2xl border shadow-sm 
                                                           hover:shadow-xl hover:-translate-y-2 
                                                           transition-all duration-300 cursor-pointer relative overflow-hidden"
                                    >

                                        {/* Decorative Top Accent */}
                                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-blue-300"></div>

                                        {/* Card Title */}
                                        <h4 className="text-blue-600 font-bold text-xl mb-4">
                                            {step.title}
                                        </h4>

                                        {/* Card Content */}
                                        <p className="text-gray-700 text-[15px] leading-relaxed">
                                            {step.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}


                {/* Outsource Model Section */}
                {selectedAbout?.outsourceModel && (
                    <section className="bg-blue-50 py-10 md:py-24 relative overflow-hidden">
                        <div className="container mx-auto px-2 md:px-6">

                            {/* Section Heading */}
                            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
                                {selectedAbout.outsourceModel.title}
                            </h2>

                            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed">
                                {selectedAbout.outsourceModel.description}
                            </p>

                            {/* Feature Cards */}
                            <div className="grid md:grid-cols-3 gap-10">
                                {selectedAbout.outsourceModel.features.map((feature: { title: string | number | bigint | boolean | ReactElement<unknown, string> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string> | Iterable<ReactNode> | null | undefined> | null | undefined; content: string | number | bigint | boolean | ReactElement<unknown, string> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: number) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-8 rounded-2xl border shadow-sm 
                                   hover:shadow-xl hover:-translate-y-2 
                                   transition-all duration-300 cursor-pointer relative overflow-hidden"
                                    >
                                        {/* Accent Line */}
                                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-blue-300"></div>

                                        <h4 className="font-bold text-blue-600 text-xl mb-4">
                                            {feature.title}
                                        </h4>

                                        <p className="text-gray-700 leading-relaxed text-[15px]">
                                            {feature.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="text-center mt-12">
                                <button
                                    className="px-10 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold 
                               shadow-md hover:bg-blue-700 hover:shadow-lg 
                               transition-all duration-300"
                                >
                                    {selectedAbout.outsourceModel.cta}
                                </button>
                            </div>
                        </div>
                    </section>
                )}


                {/* Engagement Section */}
                {selectedAbout?.engagementSection && (
                    <section className="relative py-10 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
                        <div className="container mx-auto px-2 md:px-6">

                            {/* Main Title */}
                            <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
                                {selectedAbout.engagementSection.title}
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
                                {selectedAbout.engagementSection.description}
                            </p>

                            {/* Sub Sections */}
                            <div className="space-y-12 md:space-y-16">
                                {selectedAbout.engagementSection.subSections.map((sub: EngagementSub, i: number) => (
                                    <div
                                        key={i}
                                        className="bg-white border rounded-2xl p-10 shadow-md hover:shadow-xl 
                        transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                                    >
                                        {/* Accent Line */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-300"></div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {sub.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                                            {sub.description}
                                        </p>

                                        {/* Bullet Points */}
                                        {sub.whyChoose && (
                                            <ul className="space-y-3 mb-6">
                                                {sub.whyChoose.map((item: string, idx: number) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 text-gray-700 text-[15px] leading-relaxed"
                                                    >
                                                        <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-600 mt-1"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* CTA Button */}
                                        {sub.cta && (
                                            <button
                                                className="mt-2 inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 
                                rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg 
                                transition duration-300 text-base"
                                            >
                                                {sub.cta}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}


            </div>
        </Layout>
    );
}
