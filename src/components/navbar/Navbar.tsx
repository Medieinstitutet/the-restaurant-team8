import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png'
import './Navbar.scss'
export const Navbar = () => {
  return (
    <nav>
      <div className="logoContainer">
        <img src={logo} alt="logotyp" />
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/booking"}>Boka</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Meny</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to={"/admin"}>Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};
