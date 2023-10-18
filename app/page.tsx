import Booking from "./components/Booking";
import Destinations from "./components/Destinations";
import HeroSection from "./components/HeroSection";
import Marque from "./components/Marquee";
import Services from "./components/Services";
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
      </main>
    </>
  );
}
