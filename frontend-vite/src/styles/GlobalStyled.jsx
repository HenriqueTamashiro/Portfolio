import { styled, createGlobalStyle } from "styled-components";

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
    overflow-x: hidden;
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
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 60px;

  .contentTittle {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textColor};

    text-align: center;
    font-size: 35px;
    font-weight: 600;
    text-transform: uppercase;

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
      position: absolute;
      inset: 0;

      background: radial-gradient(
          ${({ theme }) => theme.colors.secundaryLightColor} 1px,
          transparent 1px
        ),
        radial-gradient(
          ${({ theme }) => theme.colors.primaryLightColor} 1px,
          transparent 1px
        ),
        linear-gradient(rgba(0, 0, 0, 0.014), rgba(0, 0, 0, 0.014));

      background-size: 15px 15px;
      background-repeat: repeat;
      background-position: 5px 5px;
      z-index: -1;

      mask: linear-gradient(90deg, transparent, white 50%, transparent);
    }

    .divider {
      position: relative;
      height: 1px;
      width: 10%;
      margin: 1px 0 5px;

      background-color: ${({ theme }) => theme.colors.primaryBorder};
    }

    .divider::before,
    .divider::after {
      position: absolute;
      content: "";
      height: 5px;
      width: 5px;
      top: -2px;

      background: ${({ theme }) => theme.colors.primaryGlow};
    }

    .divider::after {
      right: 0;
    }

    .divider::before {
      left: 0;
    }
  }
`;
