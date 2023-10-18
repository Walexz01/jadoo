import navigation from "@/public/images/navigation 1.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
interface Props {
  image: StaticImport;
  location: string;
  price: string;
  duration: string;
}
const DestCard = ({ duration, image, location, price }: Props) => {
  return (
    <div className="destination">
      <Image alt="destination" className="dest_img" src={image} />
      <div className="deatils">
        <div className="name_price">
          <span>{location}</span>
          <span>{price}</span>
        </div>
        <span className="duration">
          <Image alt="navigation-icon" src={navigation} /> {duration}
        </span>
      </div>
    </div>
  );
};

export default DestCard;
