import logo from "../../images/logo.png";
import "./Navbar.scss";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="logoContainerMobile">
        <img src={logo} alt="logotyp" />
      </div>
      <div className="hamburger-menu-container">
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="navLinksContainerDesktop">
        <NavLink className="navlinkDesktop" to="/">Home</NavLink>
        <NavLink className="navlinkDesktop" to="/booking">Boka</NavLink>
        <div className="logoContainerDesktop">
        <img src={logo} alt="logotyp" />
      </div>
        <NavLink className="navlinkDesktop" to="/menu">Meny</NavLink>
        <NavLink className="navlinkDesktop" to="/contact">Kontakt</NavLink>
      </div>
    </nav>
  );
};
