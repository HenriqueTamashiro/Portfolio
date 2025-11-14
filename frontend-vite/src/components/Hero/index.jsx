import { NavLink } from "react-router-dom";
import { HeroStyle } from "./styled";

export default function Hero() {
  return (
    <HeroStyle>
      <section className="hero">
        <div className="hero-content">
          <div className="intro">
            <h2>
              Olá<span className="dot">.</span>
            </h2>
            <div className="line">
              <svg width="100" height="100">
                <path d="M0 0 L70 1" stroke="#76a1ff" strokeWidth="3" />
              </svg>
            </div>
            <h3>
              Me chamo <span className="name">Henrique Tamashiro</span>
            </h3>
            <h1>Fullstack Developer</h1>
          </div>

          <div className="buttons">
            <NavLink to={"/about"} className="btn primary">
              Precisa de um projeto?
            </NavLink>

            <NavLink to={"/about"} className="btn outline">
              Mais sobre mim
            </NavLink>
          </div>
        </div>
      </section>
    </HeroStyle>
  );
}
