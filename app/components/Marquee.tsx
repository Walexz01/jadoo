import marque from "@/public/images/logos.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <section className="marquee_section">
      <div className="container marquee_container">
        <Marquee>
          <Image src={marque} alt="marquee" />
        </Marquee>
      </div>
    </section>
  );
};

export default Marque;
