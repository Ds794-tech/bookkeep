// components/HeroSection.tsx
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full container mx-auto flex items-center bg-[#123463]">
      {/* Grid layout: left (content box), right (image) */}
      <div className="grid md:grid-cols-2 w-full h-[500px] md:h-[600px]">
        <div className="block md:hidden relative w-full">
          <Image
            src="/images/business_conference.jpg" // replace with your image file in public/
            alt="Team working"
            width={600}
            height={600}
            // fill
            className="object-cover relative"
          />
        </div>
        {/* Left Side - Content Box */}
        <div className="flex items-center justify-center md:p-12">
          <div className="bg-white px-3 py-12 md:p-12 shadow-lg max-w-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-[#123463] leading-snug">
              Scale Your CPA Firm with<br />
              Offshore Accounting  <br />
              <span className="text-teal-500">Expertise</span>
            </h1>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Access a reliable offshore team from Accuvibe Advisor — ready to handle bookkeeping, payroll, and financial reporting with precision.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="/contact">
                <button className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-sm shadow">
                  GET STARTED
                </button>
                <div>
                  <p className="text-sm mt-2">10 HOURS FREE TRIAL</p>
                </div>
              </a>

              {/* <button className="flex items-center gap-2 text-[#123463] font-medium">
                <span className="w-10 h-10 flex items-center justify-center border-2 border-teal-500 text-teal-500 rounded-full">
                  <FaPlay size={14} />
                </span>
                Watch Video
              </button> */}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block relative w-full">
          <Image
            src="/images/business_conference.jpg" // replace with your image file in public/
            alt="Team working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
