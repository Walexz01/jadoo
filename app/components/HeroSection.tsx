import play from "@/public/images/Play button.png";
import hero_img from "@/public/images/jadoo-hero-image.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="container hero_container">
        <div className="hero_left">
          <span className="tagline">Best Destinations around the world</span>
          <h2>Travel, enjoy and live a new and full life</h2>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="hero_btns">
            <div className="btn find_out_more">Find out more</div>
            <div className="btn play_demo">
              <Image alt="play-btn" src={play} />
              <span>Play Demo</span>
            </div>
          </div>
        </div>
        <div className="hero_right">
          <Image src={hero_img} alt="Jado-hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
