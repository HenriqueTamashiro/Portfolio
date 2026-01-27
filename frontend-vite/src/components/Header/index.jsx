import { Nav } from "./styled";
import { NavLink } from "react-router-dom";

export default function Header({ progress }) {
  return (
    <Nav>
      <NavLink to={"/"} onClick={() => progress.start()} end>
        Home
      </NavLink>
      <NavLink to={"/about"} onClick={() => progress.start()} end>
        Sobre
      </NavLink>
      <NavLink to={"/projects"} onClick={() => progress.start()} end>
        Projetos
      </NavLink>
      <NavLink to={"/contact"} onClick={() => progress.start()} end>
        Contato
      </NavLink>
    </Nav>
  );
}
