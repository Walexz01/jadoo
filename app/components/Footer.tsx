import playstore from "@/public/images/Google Play.png";
import logo from "@/public/images/Logo.png";
import googleplaystore from "@/public/images/Play Store.png";
import social2 from "@/public/images/Social (1).png";
import social3 from "@/public/images/Social (2).svg";
import social1 from "@/public/images/Social.svg";
import Image from "next/image";

const social = [social1, social2, social3];
const Links = [
  {
    title: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    title: "Contact",
    links: ["Help/FAQ", "Press", "Affilates"],
  },
  {
    title: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="container footer_container">
        <div className="top">
          <div className="logo_tagline">
            <Image alt="" src={logo} />
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          {Links.map(({ links, title }, index) => (
            <div className={title} key={index}>
              <h2>{title}</h2>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="get_on">
            <div className="social_icons">
              {social.map((icon, index) => (
                <Image key={index} alt="socil-icon" src={icon} />
              ))}
            </div>
            <p>Discover our app</p>
            <div className="download">
              <Image alt="" src={googleplaystore} />
              <Image alt="" src={playstore} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
