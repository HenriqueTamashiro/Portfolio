import { Nav } from "./styled";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Nav>
      <NavLink to={"/"} end>
        Home
      </NavLink>
      <NavLink to={"/about"} end>
        Sobre
      </NavLink>
      <NavLink to="#projetos" end>
        Projetos
      </NavLink>
      <NavLink to={"/"} end>
        Contato
      </NavLink>
    </Nav>
  );
}
