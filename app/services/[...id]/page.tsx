"use client"

import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
// import { FaFileInvoice, FaCalculator, FaDollarSign, FaChartBar, FaMoneyCheckAlt, FaCog, FaShieldAlt, FaChartLine, FaUserFriends, FaClock, FaTasks, FaTools } from "react-icons/fa";
// import Link from "next/link";
// import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import { serviceData } from "@/app/utils";

// const services = [
//     {
//         icon: <FaFileInvoice className="text-4xl text-gray-600" />,
//         title: "AR & AP Management",
//         description:
//             "Ensure smooth cash flow with expert Accounts Receivable and Payable management. We handle invoicing, vendor payments, and collections to maintain financial accuracy and efficiency.",
//     },
//     {
//         icon: <FaCalculator className="text-4xl text-gray-600" />,
//         title: "Bookkeeping Services",
//         description:
//             "Accurate and reliable outsourced bookkeeping that helps you monitor business performance and maintain up-to-date financial records.",
//     },
//     {
//         icon: <FaDollarSign className="text-4xl text-gray-600" />,
//         title: "Bank Reconciliation",
//         description:
//             "We verify and reconcile your bank statements, ensuring error-free financial reporting and strong internal control.",
//     },
//     {
//         icon: <FaChartBar className="text-4xl text-gray-600" />,
//         title: "Financial Reporting & Analysis",
//         description:
//             "Get actionable insights from detailed financial statements and analysis, helping you make confident, data-driven business decisions.",
//     },
//     {
//         icon: <FaMoneyCheckAlt className="text-4xl text-gray-600" />,
//         title: "Payroll Processing",
//         description:
//             "Simplify your payroll operations with our outsourced payroll services — timely, compliant, and tailored to your team’s needs.",
//     },
//     {
//         icon: <FaCog className="text-4xl text-gray-600" />,
//         title: "Tax Preparation & Filing",
//         description:
//             "Stress-free tax filing and compliance — we prepare, file, and optimize deductions to help your business save time and money.",
//     },
// ];

// const benefits = [
//     {
//         icon: <FaShieldAlt className="text-xl text-gray-800" />,
//         title: "Focus on Growth, Not Paperwork",
//         description:
//             "Let our experts manage your day-to-day accounting so you can focus on what truly matters — business expansion and client success.",
//     },
//     {
//         icon: <FaChartLine className="text-xl text-gray-800" />,
//         title: "Streamline Your Accounting Operations",
//         description:
//             "Achieve faster, smoother, and automated workflows with our process-driven accounting and technology integration services.",
//     },
//     {
//         icon: <FaUserFriends className="text-xl text-gray-800" />,
//         title: "Boost Profitability with Smarter Insights",
//         description:
//             "Gain actionable financial intelligence that helps identify cost-saving opportunities and improve overall profit margins.",
//     },
//     {
//         icon: <FaClock className="text-xl text-gray-800" />,
//         title: "Access a Trusted Team of Experts",
//         description:
//             "Work with Accuvibe’s certified accountants and finance professionals who bring domain expertise and reliability to your business.",
//     },
//     {
//         icon: <FaTasks className="text-xl text-gray-800" />,
//         title: "Master Modern Accounting Tools",
//         description:
//             "We leverage platforms like QuickBooks, Xero, and Zoho Books to deliver precision, compliance, and real-time financial visibility.",
//     },
// ];

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
            <section className="md:py-16 px-2 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {selectedService?.section_1.map((section, idx) => (
                        <div key={idx} className="py-10 text-center md:text-left md:py-20 flex flex-col md:flex-row items-center gap-32">
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


// type BenefitItemProps = {
//     icon: React.ReactNode;
//     text: string;
//     describe?: string;
// };

// const BenefitItem = ({ icon, text, describe }: BenefitItemProps) => (
//     <div className="flex items-center gap-3">
//         <div>
//             <span className="bg-green-50 border border-green-200 rounded-full w-10 h-10 flex items-center justify-center text-lg">{icon}</span>
//             <span className="text-gray-700 font-bold text-indigo-600">{text}</span>
//             <div className="mt-2">
//                 <p className="text-sm">{describe}</p>
//             </div>
//         </div>
//     </div>
// );

export default ServicePage;
