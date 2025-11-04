// components/AboutSection.tsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* Left Image with Quote */}
        <div className="relative">
          <Image
            src="/images/business_team.jpg" // place your image in /public
            alt="Team"
            width={600}
            height={500}
            className="rounded-md h-full object-cover"
          />
          {/* Quote Box */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg p-6 max-w-sm">
            <p className="italic text-gray-600 border-l-2 border-teal-500 pl-3">
              CA. Jitendra Vageriya
            </p>
            <p className="mt-3 font-medium text-gray-800">Founder, Accuvibe Advisor</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <p className="text-teal-600 mb-2 font-bold text-3xl">Meet Our Founder</p>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-[#123463] mb-4">
            We Have 25 Years of Experience in <br /> Bookkeeping Service Company
          </h2> */}
          <p className="text-gray-600 mb-4">
            CA. Jitendra Vageriya is a distinguished member of the Institute of Chartered Accountants of India (ICAI) and the founder of Accuvibe Advisor. He holds a Bachelor’s degree in Commerce from Mohanlal Sukhadia University (MLSU), Udaipur, Rajasthan, earned in 2000.
          </p>

          <p className="text-gray-600 mb-6">
            A lifelong learner and finance professional, he has completed several advanced certifications including the Certification Course on Concurrent Audit of Banks, Certification Course on Indian Accounting Standards (Ind-AS), and Advanced ISA Training & Certified Valuer Course conducted by ICAI.
          </p>
          <p className="text-gray-600">
            Recognized as a Talent Icon by the Indian Accounting Association in its prestigious IAA Talent Search Program, CA. Jitendra brings over two decades of hands-on expertise in:
          </p>

          {/* Checklist */}
          <ul className="space-y-3 mb-6 mt-3">
            {[
              "Income Tax Assessments & Appeals",
              "Statutory and Tax Audits",
              "Financial Advisory & System Audits",
              "Bank Concurrent Audits",
              "Bank Concurrent Audits"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-800">
                <FaCheckCircle className="text-teal-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* Features Box */}
          <div className="bg-[#123463] text-white p-6 rounded-md mb-6">
            {/* <h4 className="font-semibold text-lg">Advanced Analytics</h4> */}
            <p className="text-sm text-gray-200 mb-4">
              With a strong command of Direct and Indirect Taxation and a reputation for accuracy, integrity, and analytical insight, CA. Jitendra Vageriya continues to guide Accuvibe Advisor toward delivering world-class accounting and financial outsourcing solutions.
            </p>

            {/* <h4 className="font-semibold text-lg">Certified Company</h4>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
            </p> */}
          </div>

          {/* Footer with Button & Author */}
          <div className="flex items-center justify-between">
            {/* <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 font-medium rounded-sm shadow">
              More About Us
            </button> */}
            <div>
              <p className="font-medium text-gray-800">Freddy Mcphee</p>
              <p className="text-sm text-gray-500">CEO Bizkeep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
