import { useEffect, useState } from "react";
import { Nav } from "./styled";
import { NavLink, useLocation } from "react-router-dom";

export default function Header({ progress }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Sobre" },
    { to: "/projects", label: "Projetos" },
    { to: "/contact", label: "Contato" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function handleNavigate() {
    progress.start();
    setIsMenuOpen(false);
  }

  return (
    <Nav>
      <NavLink to="/" className="logo" onClick={handleNavigate}>
        <span className="logo-dot" />
        HT
      </NavLink>

      <div className="desktop-links">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={handleNavigate} end>
            {link.label}
          </NavLink>
        ))}
      </div>

      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <NavLink key={`mobile-${link.to}`} to={link.to} onClick={handleNavigate} end>
            {link.label}
          </NavLink>
        ))}
      </div>
    </Nav>
  );
}
