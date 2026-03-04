import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    outline: none;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.textColor};

background: radial-gradient(
  ${({ theme }) => theme.colors.primaryColor} 20%,
  ${({ theme }) => theme.colors.primaryDarkColor} 50%,
  ${({ theme }) => theme.colors.primaryLightColorOpt} 100%
);


    background-size: 800% 800%;
    animation: gradientMove 10s ease infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 10%; }
    50% { background-position: 80% 10%; }
    100% { background-position: 0% 10%; }
  }

  html, body, #root {
    height: 100%;
    scrollbar-color:
      ${({ theme }) => theme.colors.primaryGlow} transparent;
    scrollbar-width: thin;
  }

  .page {
    opacity: 0;
    transform: translateY(60px);
  }

  .page-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.8s ease, transform 0.6s ease;
  }

  .baseSection {
      opacity: 0;
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    will-change: opacity, transform;
  }

  .hiddenSection {
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
    visibility: hidden;
  }

  .showSection {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    z-index: 0;
  }
  
  .show {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.8s ease;
  }

  .hide {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.8s ease;
  }
`;
