import styled from "styled-components";

export const HeroStyle = styled.section`
  .hero {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColor};
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
    white-space: nowrap;

    /* gradiente */
    background: linear-gradient(
      50deg,
      ${({ theme }) => theme.colors.menuLightColor},
      ${({ theme }) => theme.colors.primaryGlow} 40%,
      ${({ theme }) => theme.colors.primaryBorder} 70%,
      ${({ theme }) => theme.colors.primaryLightColor}
    );

    background-size: 300% 300%;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    /* animação */
    animation: spin 12s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
    color: ${({ theme }) => theme.colors.primaryGlow};
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
    background: ${({ theme }) => theme.colors.menuLightColor};
    box-shadow: ${({ theme }) => theme.colors.boxShadowLightColor};
    color: #fff;
    transition: 600ms;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .btn.primary:hover {
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    box-shadow: ${({ theme }) => theme.colors.boxShadowLightColor};
  }

  .btn.outline {
    box-shadow: ${({ theme }) => theme.colors.boxShadowMenuLightColor};
    color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.primaryColor};
    transition: 600ms;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .btn.outline:hover {
    background: ${({ theme }) => theme.colors.menuLightColor};
    color: #fff;
  }
`;
