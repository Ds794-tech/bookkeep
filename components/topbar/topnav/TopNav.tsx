"use client";

import { JSX, useState } from "react";
import { FiChevronDown, FiMessageSquare, FiBookOpen, FiSettings, FiUsers, FiBriefcase, FiClipboard, FiHelpCircle } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

type ServiceCategory = "Business Owners" | "Valuation Services" | "Advisory Services";

type ServiceItem = {
    title: string;
    desc: string;
    icon: JSX.Element;
    path?: string;
};

const services: Record<ServiceCategory, ServiceItem[]> = {
    "Business Owners": [
        {
            title: "Accounting Outsourcing Solutions", desc: "Your trusted partner for complete, end-to-end accounting and financial operations.", icon: <FiBookOpen />,
            path: '/services/Accounting_Outsourcing_Solutions'
        },
        {
            title: "Bookkeeping & Record Management", desc: "Accurate, organized, and compliant bookkeeping handled by experienced professionals.", icon: <FiBookOpen />,
            path: '/services/Bookkeeping_Record_Management'
        },
        {
            title: "Outsourced Tax Preparation", desc: "Expert tax planning and filing to ensure maximum savings and full compliance.", icon: <FiBookOpen />,
            path: '/services/Outsourced_Tax_Preparation'
        },
        {
            title: "Accounts Receivable & Payable Management", desc: "Streamline cash flow with efficient AR & AP processing and tracking.", icon: <FiSettings />,
            path: '/services/Accounts_Receivable_Payable_Management'
        },
        {
            title: "Accounting Software Implementation", desc: "Helping you choose and integrate the perfect accounting software for your business.", icon: <FiSettings />,
            path: '/services/Accounting_Software_Implementation'
        },
        {
            title: "Payroll Management Services", desc: "Simplify payroll processing with accurate, timely, and compliant solutions.", icon: <FiUsers />,
            path: '/services/Payroll_Management_Services'
        },
        {
            title: "Virtual CFO Services", desc: "Flexible CFO-level insights and strategies tailored for growing businesses.", icon: <FiBriefcase />,
            path: '/services/Virtual_CFO_Services'
        },
        {
            title: "Xero & QuickBooks Accounting", desc: "Specialized support for Xero and QuickBooks setup, migration, and maintenance.", icon: <FiSettings />,
            path: '/services/Xero_QuickBooks_Accounting'
        },
        {
            title: "Audit Support & Compliance Services", desc: "Comprehensive audit assistance to ensure smooth reviews and accurate reporting.", icon: <FiUsers />,
            path: '/services/Audit_Support_Compliance'
        },
        {
            title: "Cost & Operational Efficiency Analysis", desc: "Data-backed insights to enhance profitability and streamline operations.", icon: <FiBriefcase />,
            path: '/services/Cost_Operational_Efficiency'
        },
        {
            title: "Year-End Accounting & Reporting", desc: "Seamless transition into the new financial year with reconciled accounts and reports.", icon: <FiBookOpen />,
            path: '/services/Year_End_Accounting_Reporting'
        },
        {
            title: "Financial Statement Preparation", desc: "Reliable, detailed financial reports to guide better business decisions.", icon: <FiBookOpen />,
            path: '/services/Financial_Statement_Preparation'
        },
    ],
    "Valuation Services": [
        { title: "Business Valuation", desc: "Accurate & Professional Valuation Services", icon: <FiBriefcase />, path: '/services/business_valuation' },
        { title: "Financial Advisory", desc: "Expert Guidance For Business Growth", icon: <FiUsers />, path: '/services/financial' },
        { title: "Fractional CFO Service", desc: "On-Demand CFO Expertise", icon: <FiBriefcase />, path: '/services/fractional' },
    ],
    "Advisory Services": []
};

export default function TopNav() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Business Owners");

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <header className="max-w-7xl mx-auto">
            <div className="md:flex md:items-center md:justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center justify-center md:block space-x-2">
                    <Image src="/images/logo.jpeg" alt="Logo" width={190} height={40} />
                </Link>

                {/* Navigation */}
                <nav className="md:flex md:items-center text-center space-x-8 text-gray-800 font-medium">

                    {/* About Us dropdown */}
                    <div className="relative group flex justify-center">
                        {/* Menu Button */}
                        <button id="topnav" className="flex items-center justify-center cursor-pointer space-x-1 hover:text-gray-900">
                            <span>About Us</span>
                            <span><FiChevronDown /></span>
                        </button>

                        {/* Popup Menu */}
                        <div className="md:absolute text-center top-full -left-10 hidden group-hover:block bg-white shadow-xl rounded-xl p-4 w-72 z-50">
                            <div className="flex flex-col space-y-4">
                                {/* Item 1 */}
                                <Link
                                    href="/aboutus/whyChooseAccuvibe"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiHelpCircle />
                                    </div>
                                    <span className="text-gray-700 font-medium">Why Accuvibe Advisor ?</span>
                                </Link>

                                {/* Item 2 */}
                                <Link
                                    href="/aboutus/work"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiSettings />
                                    </div>
                                    <span className="text-gray-700 font-medium">How We Work</span>
                                </Link>

                                {/* Item 3 */}
                                <Link
                                    href="/aboutus/team"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiUsers />
                                    </div>
                                    <span className="text-gray-700 font-medium">Meet The Team</span>
                                </Link>

                                {/* Item 4 */}
                                <Link
                                    href="/aboutus/model"
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 text-xl">
                                        <FiClipboard />
                                    </div>
                                    <span className="text-gray-700 font-medium">Engagement Model</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services mega dropdown */}
                    <div className="relative group flex justify-center">
                        <button
                            id="topnav"
                            onClick={() => toggleMenu("services")}
                            onTouchStart={() => toggleMenu("services")}
                            className="flex cursor-pointer items-center space-x-1 hover:text-gray-900"
                        >
                            <span>Services</span>
                            <FiChevronDown />
                            <div className="md:absolute top-full -left-20 hidden group-hover:flex bg-white shadow-xl rounded-xl p-4 w-[900px] z-50">

                                {/* Left Side Category */}
                                {/* <div className="w-1/4 bg-gray-50 border-r">
                                {Object.keys(services).map((cat) => (
                                    <button
                                        key={cat}
                                        onMouseEnter={() => setActiveCategory(cat as ServiceCategory)}
                                        className={`block w-full text-left px-4 py-3 text-sm font-medium ${activeCategory === cat ? "bg-green-100 text-green-600" : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div> */}

                                {/* Right Side Services */}
                                <div className="w-full grid grid-cols-2 gap-4 p-6">
                                    {services[activeCategory].map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.path || '#'}
                                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition"
                                        >
                                            <div className="text-green-600 text-xl">{item.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-sm">{item.title}</h4>
                                                <p className="text-xs text-gray-500">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </button>


                    </div>
                    <div className="relative group">
                        <Link href="/case-studies" className="hover:text-gray-900">Cases</Link>
                    </div>
                    <div className="relative group">
                        <Link href="/career" className="hover:text-gray-900">Career</Link>
                    </div>
                    <div className="relative group">
                        <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                    </div>
                </nav>

                {/* CTA Button */}
                <div className="bg-[#123463] text-white p-4 shadow-md flex items-center justify-center space-x-4 md:w-fit">
                    {/* Icon */}
                    <FiMessageSquare className="text-teal-400 text-4xl" />

                    {/* Text */}
                    <div>
                        <p className="text-base">Get Consultation</p>
                        <p className="text-lg font-bold">(021) 4582 - 3695</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
