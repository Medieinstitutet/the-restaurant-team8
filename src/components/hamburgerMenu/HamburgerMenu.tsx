import { NavLink } from "react-router-dom";
import "../hamburgerMenu/HamburgerMenu.scss";


interface IHamburgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const HamburgerMenu = ({isOpen, toggleMenu}:IHamburgerMenuProps) => {
  

    return (
        <>
       
            <button className={`hamburger-menu ${isOpen ? 'open': ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isOpen && (
        <ul className={`nav-links ${isOpen ? 'open': ''}`}>
          <li >
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

