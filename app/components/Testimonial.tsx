import testimonial from "@/public/images/testimonial.png";
import Image from "next/image";
const Testimonial = () => {
  return (
    <section className="testimonal_section">
      <div className="container testimonal_container">
        <div className="right">
          <span className="subheading">Testimonials</span>
          <h3 className="heading">What people say about Us.</h3>
        </div>
        <div className="left">
          <Image alt="testimonial-image" src={testimonial} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
