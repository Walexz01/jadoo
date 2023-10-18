import airport from "@/public/images/airport.png";
import booking from "@/public/images/book.png";
import choose from "@/public/images/choose.png";
import payment from "@/public/images/payment.png";
import Image from "next/image";

const Values = [
  {
    image: choose,
    heading: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    image: payment,
    heading: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    image: airport,
    heading: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
];
const Booking = () => {
  return (
    <section className="booking_section">
      <div className="container booking_container">
        <div className="right">
          <span className="subheading">Easy and Fast</span>
          <h3 className="heading">Book your next trip in 3 easy steps</h3>
          <div className="values">
            {Values.map(({ desc, heading, image }, index) => (
              <div className="value" key={index}>
                <Image alt="icon" src={image} />
                <div className="text">
                  <h4>{heading}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="left">
          <Image alt="booking-image" src={booking} />
        </div>
      </div>
    </section>
  );
};

export default Booking;
