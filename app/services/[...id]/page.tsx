"use client"

import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { FaFileInvoice, FaCalculator, FaDollarSign, FaChartBar, FaMoneyCheckAlt, FaCog, FaShieldAlt, FaChartLine, FaUserFriends, FaClock, FaTasks, FaTools } from "react-icons/fa";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import { serviceData } from "@/app/utils";

const services = [
    {
        icon: <FaFileInvoice className="text-4xl text-gray-600" />,
        title: "AR & AP Management",
        description:
            "Ensure smooth cash flow with expert Accounts Receivable and Payable management. We handle invoicing, vendor payments, and collections to maintain financial accuracy and efficiency.",
    },
    {
        icon: <FaCalculator className="text-4xl text-gray-600" />,
        title: "Bookkeeping Services",
        description:
            "Accurate and reliable outsourced bookkeeping that helps you monitor business performance and maintain up-to-date financial records.",
    },
    {
        icon: <FaDollarSign className="text-4xl text-gray-600" />,
        title: "Bank Reconciliation",
        description:
            "We verify and reconcile your bank statements, ensuring error-free financial reporting and strong internal control.",
    },
    {
        icon: <FaChartBar className="text-4xl text-gray-600" />,
        title: "Financial Reporting & Analysis",
        description:
            "Get actionable insights from detailed financial statements and analysis, helping you make confident, data-driven business decisions.",
    },
    {
        icon: <FaMoneyCheckAlt className="text-4xl text-gray-600" />,
        title: "Payroll Processing",
        description:
            "Simplify your payroll operations with our outsourced payroll services — timely, compliant, and tailored to your team’s needs.",
    },
    {
        icon: <FaCog className="text-4xl text-gray-600" />,
        title: "Tax Preparation & Filing",
        description:
            "Stress-free tax filing and compliance — we prepare, file, and optimize deductions to help your business save time and money.",
    },
];

const benefits = [
    {
        icon: <FaShieldAlt className="text-xl text-gray-800" />,
        title: "Focus on Growth, Not Paperwork",
        description:
            "Let our experts manage your day-to-day accounting so you can focus on what truly matters — business expansion and client success.",
    },
    {
        icon: <FaChartLine className="text-xl text-gray-800" />,
        title: "Streamline Your Accounting Operations",
        description:
            "Achieve faster, smoother, and automated workflows with our process-driven accounting and technology integration services.",
    },
    {
        icon: <FaUserFriends className="text-xl text-gray-800" />,
        title: "Boost Profitability with Smarter Insights",
        description:
            "Gain actionable financial intelligence that helps identify cost-saving opportunities and improve overall profit margins.",
    },
    {
        icon: <FaClock className="text-xl text-gray-800" />,
        title: "Access a Trusted Team of Experts",
        description:
            "Work with Accuvibe’s certified accountants and finance professionals who bring domain expertise and reliability to your business.",
    },
    {
        icon: <FaTasks className="text-xl text-gray-800" />,
        title: "Master Modern Accounting Tools",
        description:
            "We leverage platforms like QuickBooks, Xero, and Zoho Books to deliver precision, compliance, and real-time financial visibility.",
    },
];

const ServicePage = () => {
    const [selectedService, setSelectedService] = React.useState<null | typeof serviceData[keyof typeof serviceData]>(null);
    const { id } = useParams()

    const firstParam = Array.isArray(id) ? id[0] : id;

    console.log("Raw Param:", firstParam);

    const str = firstParam ?? "";

    console.log("Service Param:", str);

    useEffect(() => {
        const key = str as keyof typeof serviceData;
        console.log("Looking for key:", str);
        // if (key in serviceData) {
            const getServiceData = serviceData[key];
            setSelectedService(getServiceData);
            console.log("Service Data:", getServiceData);
        // }
    }, [id])

    console.log(selectedService)

    return (
        <Layout>
            {/* <section
                className="relative h-[250px] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/images/manager_working.jpg')", // replace with your image path
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-5">Services</h1>
                    <nav className="mt-2 text-sm">
                        <ol className="flex justify-center space-x-2">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="text-teal-400">›</span>
                            </li>
                            <li className="text-teal-400 font-medium">Services</li>
                        </ol>
                    </nav>
                </div>
            </section> */}
            {/* <section className="bg-[#0707071f]">
                <div className="relative mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between py-16 overflow-hidden">
                    <div className="text-center max-w-xl md:text-left mt-10 md:mt-0">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                            Accuvibe Advisor – One Place  <br />
                            for All Your<span className="text-red-400"> Accounting Needs</span>
                        </h1>
                        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
                            From books to balance sheets — Accuvibe Advisor handles all your accounting needs with precision and trust.
                        </p>
                        <button className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-md shadow cursor-pointer transition">
                            Get Started
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="bg-white border rounded-2xl shadow-md p-8 relative z-10">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/482/482947.png"
                                alt="Accounting Icon"
                                className="w-20 mx-auto opacity-70"
                            />
                        </div>

                        <div className="absolute -top-4 right-10 text-green-500 text-4xl">
                            <FaCheckCircle />
                        </div>

                        <div className="absolute -bottom-6 left-0 bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 text-sm">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Raj Sharma"
                                className="w-6 h-6 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-800">Raj Sharma</p>
                                <p className="text-gray-500 text-xs">Senior Accountant</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-14 right-0 bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 text-sm">
                            <img
                                src="https://randomuser.me/api/portraits/women/45.jpg"
                                alt="Mona Singh"
                                className="w-6 h-6 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-800">Mona Singh</p>
                                <p className="text-gray-500 text-xs">Tax Reviewer</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-0 top-0 w-[40rem] h-[40rem] bg-gradient-to-r from-indigo-100 to-gray-50 rounded-full blur-3xl opacity-60 -z-10"></div>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
                        Our Outsourced Accounting Services
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        At Accuvibe Advisor, we simplify accounting for growing businesses through outsourced bookkeeping, payroll, and tax services. Our expert accountants deliver accurate, compliant, and efficient solutions to keep your finances on track.
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 text-left transition-all duration-300"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="pb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
                            Benefits of Outsourcing Accounting Services
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-3xl">
                            Empower your business with smarter, faster, and more efficient outsourced accounting solutions from Accuvibe Advisor. Reduce workload, cut costs, and scale operations — while we handle your books with accuracy and care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 py-5 gap-10">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 text-left transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-indigo-600">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="min-h-screen bg-gray-50">
                <div className="bg-[#263054] py-4">
                    <div className="container mx-auto max-w-7xl flex justify-between items-center">
                        <span className="text-white text-lg font-semibold">
                            Streamline your finances today with expert outsource accounting services
                        </span>
                        <button className="bg-white px-5 py-2 rounded-lg text-[#263054] font-medium shadow">
                            Contact to Our Experts
                        </button>
                    </div>
                </div>
                <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 py-20">
                    <div className="flex-1">
                        <h2 className="text-4xl font-semibold text-[#495682] mb-5 text-indigo-600">
                            Why Choose Accuvibe Advisor for Outsourced Accounting Services
                        </h2>
                        <p className="text-gray-500 max-w-xl mb-4">
                            Experience the Accuvibe Advantage — where expertise, accuracy, and technology-driven accounting come together. Our certified accountants deliver seamless outsourced accounting support that helps you scale your business while staying compliant and cost-efficient.
                        </p>
                        <a href="#" className="text-[#4A66C3] font-bold hover:underline">
                            Hire an Accounting Expert →
                        </a>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <BenefitItem icon="🕒" text="Faster Turnaround Time" describe="We prioritize efficiency with quick response times and reliable accounting delivery schedules." />
                            <BenefitItem icon="💡" text="10+ Years of Combined Experience" describe="Our seasoned professionals bring deep financial expertise and industry know-how to every project." />
                            <BenefitItem icon="👥" text="Dedicated Accounting Team" describe="Access our team of qualified accountants and financial analysts focused entirely on your business needs." />
                            <BenefitItem icon="🛠️" text="Proficiency Across Leading Accounting Tools" describe="From QuickBooks and Xero to Zoho Books and Tally, our experts work fluently across multiple platforms." />
                            <BenefitItem icon="📄" text="Flexible Engagement Models" describe="Choose from full-time, part-time, or project-based accounting support tailored to your workflow." />
                            <BenefitItem icon="💵" text="Affordable, Value-Driven Services" describe="Enjoy cost-effective outsourced accounting without compromising on quality or accuracy." />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-3xl shadow-lg px-10 py-12 min-w-[370px] max-w-md w-full flex flex-col gap-7 border-[3px] border-gray-200">
                            <div className="flex gap-3 items-center">
                                <span className="bg-green-100 rounded-lg p-2"><svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" /></svg></span>
                                <span className="text-gray-700 font-semibold">Timeline</span>
                                <div className="ml-4 bg-gray-200 rounded-full h-2 w-24 flex items-center">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }} />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-200 w-12 h-12 rounded-lg" />
                                <div className="bg-white rounded p-2 w-3/4" />
                            </div>
                            <div className="bg-white flex items-center gap-3 px-5 py-3 rounded-lg">
                                <span className="bg-gray-200 p-2 rounded-full">⚙️</span>
                                <span className="bg-gray-200 p-2 rounded-full">💬</span>
                                <span className="bg-gray-200 p-2 rounded-full">📄</span>
                                <span className="bg-gray-200 p-2 rounded-full">🔄</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="bg-green-100 rounded-lg p-2">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12v6m0 0l3-3m-3 3l-3-3" /></svg>
                                </span>
                                <div className="bg-white rounded p-3 w-24" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* <h2 className="text-3xl md:text-4xl text-center py-2 font-bold text-indigo-600">
                        {selectedService?.heading}
                    </h2> */}

                    {/* Section 1 */}
                    {selectedService?.section_1.map((section, idx) => (
                        <div key={idx} className="py-20 flex flex-col md:flex-row items-center gap-32">
                            <div className="max-w-2xl">
                                <h3 className="text-xl font-semibold">{section.section_first_heading}</h3>
                                <p className="text-gray-600 mt-2">{section.description}</p>
                            </div>
                            <img src={section.image} alt={section.alt} className="w-64" />
                        </div>
                    ))}

                    {/* Section 2 */}
                    {selectedService?.section_2.map((section, idx) => (
                        <div key={idx} className="mt-12">
                            <h3 className="text-2xl font-bold text-indigo-600">{section.section_second_heading}</h3>
                            <p className="text-gray-600 mt-2">{section.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {section.card?.map((card, cIdx) => (
                                    <div key={cIdx} className="bg-white rounded-2xl shadow-sm p-6">
                                        <img src={card.card_icon} alt={card.card_title} className="w-12 h-12 mb-2" />
                                        <h4 className="text-lg font-semibold text-indigo-600">{card.card_title}</h4>
                                        <p className="text-gray-600 text-sm">{card.card_description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Section 3 */}
                    {selectedService?.section_3.map((section, idx) => (
                        <div key={idx} className="mt-12">
                            <h3 className="text-2xl font-bold text-indigo-600">{section.section_third_heading}</h3>
                            <p className="text-gray-600 mt-2">{section.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {section.card?.map((card, cIdx) => (
                                    <div key={cIdx} className="bg-white rounded-2xl shadow-sm p-6">
                                        <img src={card.card_icon} alt={card.card_title} className="w-12 h-12 mb-2" />
                                        <h4 className="text-lg font-semibold text-indigo-600">{card.card_title}</h4>
                                        <p className="text-gray-600 text-sm">{card.card_description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </Layout>
    );
};


type BenefitItemProps = {
    icon: React.ReactNode;
    text: string;
    describe?: string;
};

const BenefitItem = ({ icon, text, describe }: BenefitItemProps) => (
    <div className="flex items-center gap-3">
        <div>
            <span className="bg-green-50 border border-green-200 rounded-full w-10 h-10 flex items-center justify-center text-lg">{icon}</span>
            <span className="text-gray-700 font-bold text-indigo-600">{text}</span>
            <div className="mt-2">
                <p className="text-sm">{describe}</p>
            </div>
        </div>
    </div>
);

export default ServicePage;
