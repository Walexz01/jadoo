import social2 from "@/public/images/Social (1).png";
import social3 from "@/public/images/Social (2).svg";
import social1 from "@/public/images/Social.svg";
import Booking from "./components/Booking";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Marque from "./components/Marquee";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Services />
        <Destinations />
        <Booking />
        <Testimonial />
        <Marque />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}
