import london from "@/public/images/london.jpg";
import rome from "@/public/images/rome.png";
import europe from "@/public/images/erupe.png";

import DestCard from "./DestCard";
import SectionHeader from "./SectionHeader";

const DestData = [
  {
    image: rome,
    location: "Rome, Italty",
    price: "$5,42k",
    duration: "10 Days Trip",
  },
  {
    image: london,
    location: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: europe,
    location: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];
const Destinations = () => {
  return (
    <section className="destinations_section">
      <div className="container destinations_container">
        <SectionHeader span="Top Selling" heading="Top Destinations" />
        <div className="destinations">
          {DestData.map(({ duration, image, location, price }, index) => (
            <DestCard
              duration={duration}
              image={image}
              location={location}
              price={price}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
