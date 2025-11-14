import styled from "styled-components";
import * as colors from "../../config/colors";

export const HeroStyle = styled.section`
  .hero {
    display: flex;
    align-items: center;
    color: #fff;
    padding-left: 2%;
    font-family: "Poppins", sans-serif;
  }

  /* Conteúdo central */
  .hero-content {
    max-width: 600px;
  }

  /* Título principal */
  .intro h1 {
    font-size: clamp(1.8rem, 5vw, 45px);
    font-weight: 700;
    margin: 1rem 0;
    color: #ffffff;
    white-space: nowrap;
  }

  /* Títulos */
  .intro h2 {
    font-size: clamp(1.2rem, 5vw, 2rem);
    font-weight: 600;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
  }

  /* Subtítulo */
  .intro h3 {
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    font-weight: 100;
  }

  .dot {
    color: ${colors.primaryGlow};
    margin-left: 4px;
  }

  /*Linha decorativa */
  .line {
    width: 50px;
    height: 3px;
    margin: 1rem 0;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    animation: drawLine 18s linear infinite;
  }

  .name {
    font-weight: 700;
  }

  /* Botões */
  .buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
  }

  .btn {
    text-decoration: none;
    padding: 0.8em 1.6em;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: clamp(0.8rem, 1.2vw, 1rem);
  }

  .btn.primary {
    background: ${colors.primaryGlow};
    color: #fff;
  }

  .btn.primary:hover {
    background: ${colors.primaryLightColor};
  }

  .btn.outline {
    border: 2px solid ${colors.primaryBorder};
    color: ${colors.primaryGlow};
  }

  .btn.outline:hover {
    background: ${colors.primaryGlow};
    color: #fff;
  }
`;
