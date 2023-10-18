import Logo from "@/public/images/Logo.png";
import Image from "next/image";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav ">
      <div className="nav_container container">
        <div className="logo">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li className="signup">Sign up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
