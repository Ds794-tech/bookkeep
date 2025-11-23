import { servicesList } from "@/app/utils";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12">

      {/* ====== TOP FOOTER SECTION ====== */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + Contact Us */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img
            src="/images/logo.png"
            alt="Accelirate"
            className="h-20 mb-4 md:mb-0"
          />

          <div className="flex items-center gap-2 text-blue-700 cursor-pointer text-sm font-medium">
            <span className="flex items-center gap-2 mr-10">
              ✉️ Contact Us
            </span>

            {/* LinkedIn Button */}
            <div className="flex items-center bg-[#eef3f8] px-3 py-1 rounded border cursor-pointer">
              <span className="text-blue-700 text-sm">in</span>
              <span className="ml-1 text-gray-600 text-xs">Follow</span>
              <span className="ml-1 text-gray-500 text-xs">22,319</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 mb-5" />

        {/* ====== FOOTER COLUMNS ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-blue-800 mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-700 leading-6">
              {
                servicesList.map((service) => (
                  <li key={service.title}><a href={service.path} className="hover:text-blue-800">{service.title}</a></li>
                ))
              }
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg text-blue-800 mb-3">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-700 leading-6">
              <li>Banking</li>
              <li>Healthcare</li>
              <li>Accounting & Finance</li>
              <li>Insurance</li>
              <li>Hospitality</li>
              <li>Manufacturing</li>
              <li>Retail</li>
              <li>Oil, Gas, & Energy</li>
              <li>Legal & Law Firms</li>
              <li>Education</li>
              <li>Cruise</li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h3 className="font-semibold text-lg text-blue-800 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-700 leading-6">
              <li>White Papers</li>
              <li>Case Studies</li>
              <li>Glossary</li>
              <li>Guide</li>
              <li>Emerging Tech Tube</li>
              <li>Thought Leadership</li>
              <li>Infographics</li>
              <li>Events & Tech-Talks</li>
              <li>Newsletters Archive</li>
            </ul>
          </div> */}

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg text-blue-800 mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-700 leading-6">
              <li><a href="/career" className="hover:text-blue-800">Careers</a></li>
              {/* <li>Company News</li> */}
              <li><a href="/aboutus/team" className="hover:text-blue-800">Meet Our Team</a></li>
              <li><a href="#partner" className="hover:text-blue-800">Our Partners</a></li>
              <li><a href="#" className="hover:text-blue-800">Our Awards</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* ====== BLACK SOCIAL BAR ====== */}
      <div className="bg-black mt-10">
        <div className="md:max-w-7xl md:mx-auto px-6 py-2 md:flex md:justify-between items-center gap-3 text-sm text-white">
          <div className="flex flex-col items-center flex-row gap-10 md:gap-6">
            <div>
              <span className="text-xl">Let’s Connect :</span>
            </div>
            <div className="flex items-center justify-between space-x-3">
              <a href="#" className="hover:text-teal-800">
                <FaFacebook className="md:text-2xl" />
              </a>
              <a href="#" className="hover:text-teal-800">
                <FaTwitter className="md:text-2xl" />
              </a>
              <a href="#" className="hover:text-teal-800">
                <FaLinkedinIn className="md:text-2xl" />
              </a>
              <a href="#" className="hover:text-teal-800">
                <FaInstagram className="md:text-2xl" />
              </a>
            </div>
          </div>
          <div className="bg-black text-gray-400 text-xs py-4 text-center">
            AccuVibe Advisor® is a Registered Trademark © 2025 All Rights Reserved.
            <br />
            <div className="flex justify-end mt-2">
              <span className="cursor-pointer hover:text-gray-200">Sitemap </span>&nbsp; |
              <span className="cursor-pointer hover:text-gray-200"><Link href="/privacy-policy">&nbsp; Privacy Policy</Link></span>
            </div>
          </div>
        </div>
      </div>

      {/* ====== COPYRIGHT BAR ====== */}


    </footer>
  );
}
