import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding-right: clamp(30px, 60vw, 30px);
  padding-left: 16px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  z-index: 99;
  backdrop-filter: blur(20px);
  ${({ theme }) => theme.colors.gradients.primary}

  .desktop-links {
    display: flex;
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: auto;
    padding: 12px;
    transition: 400ms;
  }

  a:hover {
    /* text-shadow: 0 0 15px ${({ theme }) =>
      theme.colors.primaryGlow}, 0 0 15px ${({ theme }) =>
      theme.colors.primaryGlow}; */
    transition: 800ms;
    box-shadow: inset 0 -4px 0 0 ${({ theme }) => theme.colors.menuLightColor};
    background: ${({ theme }) => theme.colors.secundaryLightColor};

    color: ${({ theme }) => theme.colors.textColor};
  }

  .menu-toggle {
    display: none;
    width: 42px;
    height: 42px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.textColor};
    transition: 220ms ease;
    transform-origin: center;
  }

  .menu-toggle.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;

    .desktop-links {
      display: none;
    }

    .menu-toggle {
      display: inline-flex;
      z-index: 2;
    }

    .mobile-menu {
      position: absolute;
      top: 60px;
      right: 16px;
      width: min(260px, calc(100% - 32px));
      display: flex;
      flex-direction: column;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
      border-radius: 8px;
      backdrop-filter: blur(20px);
      background: ${({ theme }) => theme.colors.menuDarkColor};
      transition:
        max-height 240ms ease,
        opacity 200ms ease;
    }

    .mobile-menu.open {
      max-height: 280px;
      opacity: 1;
      pointer-events: auto;
      box-shadow: ${({ theme }) => theme.colors.boxShadowMenuLightColor};
    }

    .mobile-menu a {
      width: 100%;
      height: auto;
      justify-content: flex-start;
      padding: 14px 16px;
      border-radius: 0;
      transition:
        transform 200ms ease,
        background 200ms ease,
        color 200ms ease;
    }

    .mobile-menu a:active,
    .mobile-menu a:focus-visible {
      transform: translateX(4px);
      background: ${({ theme }) => theme.colors.primaryColor};
      box-shadow: none;
    }

    @media (hover: hover) and (pointer: fine) {
      .mobile-menu a:hover {
        transform: translateX(4px);
        background: ${({ theme }) => theme.colors.primaryColor};
        box-shadow: none;
      }
    }

    .mobile-menu a:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.menuLightColor};
    }
  }
`;
