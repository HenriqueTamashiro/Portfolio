import { styled, createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export default createGlobalStyle`
* {
  padding: 0;
  outline: none;
  margin: 0;
  box-sizing:  border-box;

  }

  body {
    color: #fff;
    font-family: "Poppins", sans-serif ;
    min-height: 100vh; 
    overflow-x: hidden;
    background: radial-gradient(
    ${colors.primaryColor} 20%,                        
    ${colors.primaryDarkColor} 50%,
    ${colors.primaryLightColorOpt} 90% 
  );

  background-size: 400% 400%;
    animation: gradientMove  15s ease infinite;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 10%;
    }

    50% {
      background-position: 80% 10%;
    }

    100% {
      background-position: 0% 10%;
    }
  }


  html, body, #root {
    height: 100%;
    scrollbar-color: ${colors.primaryGlow} transparent;
    scrollbar-width: thin;
  }

  .page{
    opacity: 0;
    transform: translateY(60px);
  }

  .page-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.8s ease, transform 0.6s ease;
  }

 /* base para sections reveláveis */
  .baseSection {
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    will-change: opacity, transform;
  }


  /* estado escondido */
  .hiddenSection {
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
       visibility: hidden;
  }



  /* estado visível */
  .showSection {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    z-index: 0;
  }

`;

export const Container = styled.div`
  width: 100%;
  padding-top: 60px;

  .contentTittle {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 120px;
    max-height: 150px;
    mask: linear-gradient(
      90deg,
      transparent,
      white 40%,
      white 80%,
      transparent
    );

    &::before {
      content: "";
      width: 100%;
      height: auto;
      position: absolute;
      inset: 0;

      background: radial-gradient(
          ${colors.secundaryLightColor} 1px,
          transparent 1px
        ),
        radial-gradient(${colors.primaryLightColor} 1px, transparent 1px),
        linear-gradient(rgba(0, 0, 0, 0.014), rgba(0, 0, 0, 0.014));
      background-size: 15px 15px;
      background-repeat: repeat;
      background-position: 5px 5px;
      z-index: -1;

      mask: linear-gradient(90deg, transparent, white 50%, transparent);
    }

    .line {
      width: 50px;
      height: 3px;
      margin-right: 20px;
      stroke-dasharray: 800;
      stroke-dashoffset: 800;
      animation: drawLine 8s linear infinite;
    }
  }
`;
