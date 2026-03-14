import styled from "styled-components";

export const WindowLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 9999;
  pointer-events: none;

  &.hide {
    opacity: 0;
    transition: opacity 0.4s ease 0.4s;
  }

  &.show {
    opacity: 1;
    transition: opacity 0.2s ease;
  }

  .progress-bckgr {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryGlow},
      ${({ theme }) => theme.colors.tealGlow}
    );
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primaryGlow};
    transition: width 0.4s cubic-bezier(0.1, 0.05, 0.4, 1);
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
