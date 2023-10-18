import Image from "next/image";

interface Props {
  image: string;
  heading: string;
  desc: string;
}
const Service = ({ desc, heading, image }: Props) => {
  return (
    <div className="service">
      <Image alt="weather" src={image} />
      <h4>{heading}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Service;
