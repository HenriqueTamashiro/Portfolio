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
    background: radial-gradient(
    ${colors.primaryColor} 10%,                        
    ${colors.primaryDarkColor}                         
  );
  }

  html, body, #root {
    height: 100%;
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


`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .contentTittle {
    display: flex;
    position: relative;
    margin-top: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;

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
  }
`;
