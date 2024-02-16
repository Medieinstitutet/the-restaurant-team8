import logo from "../../images/logo.png";
import "./Navbar.scss";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import { useState } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="logoContainer">
        <img src={logo} alt="logotyp" />
      </div>
      <div className="hamburger-menu-container">
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};
