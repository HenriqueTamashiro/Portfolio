import styled from "styled-components";
export const WindowLayout = styled.div`
  position: fixed;
  top: 60px;
  width: 100%;
  z-index: 9999;
  pointer-events: none;

  .bar-wrapper {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .hide {
    opacity: 0;
    transform: translateY(-6px);
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }

  .progress-bckgr {
    background: ${({ theme }) => theme.colors.primaryColor};
    height: 4px;
  }

  .progress-bar {
    height: 4px;
    background: linear-gradient(
      270deg,
      ${({ theme }) => theme.colors.primaryColor},
      ${({ theme }) => theme.colors.primaryGlow},
      ${({ theme }) => theme.colors.secundaryLightColor}
    );
    background-size: 800% 100%;
    animation: gradientMove 4s linear infinite;
    transition: width 0.4s linear;
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
