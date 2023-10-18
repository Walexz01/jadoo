import custom from "@/public/images/custom.svg";
import event from "@/public/images/event.svg";
import flight from "@/public/images/plane.svg";
import weather from "@/public/images/weather.svg";
import SectionHeader from "./SectionHeader";
import Service from "./Service";

const serviceData = [
  {
    image: weather,
    heading: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: flight,
    heading: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: event,
    heading: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    image: custom,
    heading: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

const Services = () => {
  return (
    <section className="category_section">
      <div className="container category_container">
        <SectionHeader span="CATEGORY" heading="We Offer Best Services" />
        <div className="services">
          {serviceData.map(({ desc, heading, image }, index) => (
            <Service desc={desc} heading={heading} image={image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
