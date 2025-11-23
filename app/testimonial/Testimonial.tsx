"use client";

import Slider from "react-slick";

export default function TestimonialsSection() {

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
            { breakpoint: 320, settings: { slidesToShow: 2 } },
        ],
    };


    const testimonials = [
        {
            quote:
                "Accuvibe Advisor has been an incredible partner for our firm. Their offshore accounting team is detail-oriented, professional, and always delivers on time. It’s like having an in-house finance department — only more efficient.",
            author: "— Gerald Flynn, Entrepreneur (USA)",
            // title: "Entrepreneur (USA)",
            image: "/images/testimonial1.jpg",
        },
        {
            quote:
                "The expertise and responsiveness of Accuvibe Advisor’s team have transformed our financial reporting process. They’ve helped us save time, reduce errors, and maintain full compliance — highly recommended!",
            author: "— Sophia Martinez, CPA (United Kingdom)",
            // title: "CPA (United Kingdom)",
            image: "/images/testimonial2.jpg",
        },
        {
            quote:
                "We’ve worked with Accuvibe Advisor for over three years, and their consistency is unmatched. Their understanding of U.S. and U.K. accounting standards makes cross-border operations completely seamless.",
            author: "— Daniel Scott, Finance Director (Australia)",
            // title: "Finance Director (Australia)",
            image: "/images/testimonial3.jpg",
        }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-[#f8fafb] px-2 py-10 md:py-20 md:px-6 md:px-20">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Testimonials
                </h2>
                <p className="text-[#1387A4] italic text-lg mb-4">
                    Trusted by Businesses Across 16+ Countries Worldwide
                </p>
                <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                    At <span className="font-semibold text-gray-900">Accuvibe Advisor</span>, our clients trust us to manage their
                    accounting, bookkeeping, and tax operations with accuracy and dedication. From small businesses to
                    international CPA firms, we’ve built long-term partnerships based on reliability, transparency, and consistent
                    results.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="relative md:container md:mx-auto">
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="px-2 md:px-4 md:py-10">
                            <div
                                key={index}
                                className="bg-white shadow-sm md:shadow-xl rounded-2xl max-w-2xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 border-t-4 border-[#1387A4]"
                            >
                                {/* <div className="flex items-center mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.author}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#1387A4] mr-4"
                                        loading="lazy"
                                    />
                                </div> */}
                                <p className="text-gray-700 leading-relaxed italic">
                                    “{item.quote}”
                                </p>
                                <div>
                                    {/* <h4 className="text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </h4> */}
                                    <p className="text-gray-500 text-sm italic mt-5">{item.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section >
    );
}
