import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    outline: none;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", "Roboto Condensed", sans-serif;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.primaryDarkColor};
    background-image:
      radial-gradient(ellipse at 15% 0%, #3b1fa022 0%, transparent 55%),
      radial-gradient(ellipse at 85% 5%, #00c9b115 0%, transparent 45%),
      radial-gradient(ellipse at 50% 100%, #1e3a6e18 0%, transparent 60%);
    background-attachment: fixed;
  }

  html, body, #root {
    height: 100%;
    scrollbar-color: ${({ theme }) => theme.colors.primaryGlow} transparent;
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryGlow};
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
    visibility: visible;
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
