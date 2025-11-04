import About from "@/components/about/About";
import Services from "@/components/AccountingService";
import Header from "@/components/topbar";
import OverLayImage from "@/components/OverlayImage";
import StatsSection from "@/components/StatSection";
import Image from "next/image";
import HeroSection from "@/components/herosection/HeroSection";
import AboutSection from "@/components/about/About";
import BookkeepingSection from "@/components/whoWeAre/WhoWeAre";
import ServicesSection from "@/components/ourservice/OurService";
import OurConsultant from "@/components/ourConsultant/OurConsultant";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import BlogSection from "@/components/blog/Blog";
import FooterNewsletter from "@/components/footer/Footer";
import ProcessSection from "@/components/process/Process";
import PartnerSlider from "@/components/partnerSection/PartnerSection";
import LatestProject from "@/components/ourCase/OurCase";
import Layout from "./layout/Layout";
import TestimonialsSection from "./testimonial/Testimonial";
// import Career from "@/app/career/page";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <BookkeepingSection />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      <TestimonialsSection />
      {/* <PartnerSlider /> */}
      {/* <LatestProject /> */}
      <ProcessSection />
      <OurConsultant />
      {/* <BlogSection /> */}
    </Layout>
  );
}
