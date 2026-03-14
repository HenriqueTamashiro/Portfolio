import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(16px, 5vw, 60px);
  z-index: 99;
  backdrop-filter: blur(16px) saturate(180%);
  background: rgba(8, 8, 15, 0.88);
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};

  .logo {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 0;
    height: 36px;
    padding: 0 8px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    text-decoration: none;
    border-radius: 6px;
    transition:
      color 0.2s ease,
      background 0.2s ease;
  }

  .logo-icon {
    width: auto;
    height: 100%;
    display: block;
    opacity: 0.8;
    transition:
      opacity 0.2s ease,
      filter 0.2s ease;
  }

  .logo.active {
    color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
  }

  .logo.active .logo-icon {
    opacity: 1;
    filter: drop-shadow(0 0 14px ${({ theme }) => theme.colors.primaryGlow}33);
  }

  .logo.active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryGlow},
      ${({ theme }) => theme.colors.tealGlow}
    );
    border-radius: 2px 2px 0 0;
  }

  .desktop-links {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 16px;
    transition:
      color 0.2s ease,
      background 0.2s ease;
    position: relative;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.secundaryLightColor};
  }

  a.active {
    color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
  }

  a.active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryGlow},
      ${({ theme }) => theme.colors.tealGlow}
    );
    border-radius: 2px 2px 0 0;
  }

  .menu-toggle {
    display: none;
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .menu-toggle:hover {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
  }

  .menu-toggle span {
    width: 18px;
    height: 2px;
    background: ${({ theme }) => theme.colors.textColor};
    transition: 220ms ease;
    transform-origin: center;
    border-radius: 2px;
  }

  .menu-toggle.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }
  .menu-toggle.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 768px) {
    .logo {
      height: 40px;
      padding: 0 6px;
    }

    .desktop-links {
      display: none;
    }
    .menu-toggle {
      display: inline-flex;
      z-index: 2;
    }
    .mobile-menu {
      position: absolute;
      top: 68px;
      right: 16px;
      width: min(240px, calc(100% - 32px));
      display: flex;
      flex-direction: column;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
      border-radius: 12px;
      backdrop-filter: blur(20px);
      background: rgba(10, 10, 24, 0.97);
      border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
      transition:
        max-height 240ms ease,
        opacity 200ms ease;
    }
    .mobile-menu.open {
      max-height: 300px;
      opacity: 1;
      pointer-events: auto;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }
    .mobile-menu a {
      width: 100%;
      height: auto;
      justify-content: flex-start;
      padding: 14px 20px;
      border-radius: 0;
      font-size: 15px;
      transition:
        background 200ms ease,
        color 200ms ease;
    }
    .mobile-menu a:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    }
    .mobile-menu a:hover,
    .mobile-menu a:active {
      background: ${({ theme }) => theme.colors.secundaryLightColor};
      color: ${({ theme }) => theme.colors.textColor};
    }
    .mobile-menu a.active {
      color: ${({ theme }) => theme.colors.primaryGlow};
    }
    .mobile-menu a.active::after {
      display: none;
    }
  }
`;
