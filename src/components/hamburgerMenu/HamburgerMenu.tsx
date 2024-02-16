import { NavLink } from "react-router-dom";
import "../hamburgerMenu/HamburgerMenu.scss";
import { IHamburgerMenu } from "../../models/IHamburgerMenu";


export const HamburgerMenu = ({ isOpen, toggleMenu }: IHamburgerMenu) => {
  return (
    <>
      <button
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Boka</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Meny</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li> */}
        </ul>
      )}
    </>
  );
};
