import React,{useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
const [Navbar, setNavbar] = useState(false)
const HandleNavMenu = () => { setNavbar(!Navbar) }

  return (
    <nav className="h-[80px] bg-green-700 w-full fixed px-4 flex justify-between items-center">
      <div>
        <Link to={{ pathname: "https://www.google.com" }} target="_blank">
          <img src={Logo} alt='Logo' />
          TachoBikes
        </Link>
      </div>

      <div className="font-medium font-sans hidden md:flex">
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>

      <div onClick={HandleNavMenu} className="md:hidden z-10">
        {!Navbar ? <FaBars /> : <FaTimes />}
        
      </div>

      <ul className={!Navbar ? 'hidden' : "absolute top-0 left-0 bg-green-700 w-full h-screen flex flex-col justify-center items-center font-bold"}>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
