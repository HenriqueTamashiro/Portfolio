import styled from "styled-components";

export const WindowLayout = styled.div`
  position: fixed;
  top: 60px;
  width: 100%;
  height: 1%;

  z-index: 9;

  .progress-bckgr {
    position: relative;
    background: ${({ theme }) => theme.colors.primaryColor};
    width: auto;
    height: 4px;
    z-index: 10;
  }
  .progress-bar {
    position: absolute;
    top: 0;
    height: 4px;
    background: linear-gradient(
      270deg,
      ${({ theme }) => theme.colors.primaryColor},
      ${({ theme }) => theme.colors.primaryGlow},
      ${({ theme }) => theme.colors.secundaryLightColor}
    );
    background-size: 800% 100%;
    animation: gradientMove 4s linear infinite;
    z-index: 99;
  }
  .hide {
    position: absolute;
    opacity: 0;
    transform: translateY(-6px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
  .show {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.4s ease;
    pointer-events: auto;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
`;
