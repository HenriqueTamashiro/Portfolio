import styled from "styled-components";

export const StyledFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  width: 100%;
  height: 200px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      ${({ theme }) => theme.colors.secundaryDarkColor}88 100%
    );
    z-index: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.2s ease;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryGlow};
  }

  .footerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 1;
  }

  .text-container {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textMuted};
    z-index: 20;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    gap: 1rem;
    z-index: 20;
  }

  .icon-container a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .icon-container a:hover {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    color: ${({ theme }) => theme.colors.primaryGlow};
  }
`;
