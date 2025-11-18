"use client";

import Slider from "react-slick";

const logos = [
  "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/Garret.png",
  "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/Domoo.png",
  "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/square-pixel-VVLG4M3.png",
  "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/Parka.png",
  "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/Parka.png",
  "https://templatekit.jegtheme.com/bizkeep/wp-content/uploads/sites/214/2021/11/Garret.png",
];

export default function PartnerSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="px-4 py-12">
              <div className="bg-white shadow-md rounded-lg flex items-center justify-center p-4 h-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
