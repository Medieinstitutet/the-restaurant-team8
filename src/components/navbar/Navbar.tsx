import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
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
