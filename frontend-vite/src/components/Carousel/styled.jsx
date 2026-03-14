import styled from "styled-components";

export const TechGridStyle = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem clamp(1rem, 5vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  background: ${({ theme }) => theme.colors.primaryDarkColor};

  .grid-header {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: clamp(1.8rem, 4vw, 2.4rem);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textColor};
      margin: 0;
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }
  }

  .tech-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(140px, 20vw, 200px), 1fr));
    gap: 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;

    /* Linhas horizontais divisórias */
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        ${({ theme }) => theme.colors.primaryBorder},
        transparent
      );
      z-index: 1;
      pointer-events: none;
    }
  }

  .tech-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(1.5rem, 3vw, 2.5rem);
    min-height: clamp(140px, 20vw, 200px);
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-right: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    transition: all 0.3s ease;
    cursor: pointer;

    /* Remove borda direita do último item de cada linha */
    &:nth-child(4n) {
      border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
    }

    /* Remove borda inferior da última linha */
    &:nth-last-child(-n + 4) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.menuLightColorOpt};
      border-color: ${({ theme }) => theme.colors.primaryGlow};
      box-shadow: 0 0 20px ${({ theme }) => theme.colors.primaryGlow}22;
      transform: translateY(-4px);
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
    }

    .tech-icon {
      width: clamp(40px, 6vw, 60px);
      height: clamp(40px, 6vw, 60px);
      color: ${({ theme }) => theme.colors.primaryGlow};
      transition: all 0.3s ease;
    }

    i {
      font-size: clamp(2rem, 4vw, 3rem);
      color: ${({ theme }) => theme.colors.primaryGlow};
      transition: all 0.3s ease;
    }

    &:hover .tech-icon,
    &:hover i {
      color: ${({ theme }) => theme.colors.tealGlow};
      transform: scale(1.15);
    }

    .tech-name {
      font-size: clamp(0.85rem, 1.2vw, 1rem);
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textColor};
      margin: 0;
      text-align: center;
      text-transform: capitalize;
      letter-spacing: 0.02em;
    }
  }

  @media (max-width: 1024px) {
    .tech-grid-container {
      grid-template-columns: repeat(3, 1fr);
    }

    .tech-card {
      &:nth-child(3n) {
        border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
      }

      &:nth-last-child(-n + 3) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem clamp(0.8rem, 3vw, 1.5rem);

    .tech-grid-container {
      grid-template-columns: repeat(2, 1fr);
    }

    .tech-card {
      min-height: clamp(120px, 25vw, 160px);
      padding: clamp(1rem, 2vw, 1.5rem);

      &:nth-child(2n) {
        border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
      }

      &:nth-last-child(-n + 2) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;

    .tech-grid-container {
      grid-template-columns: 1fr;
    }

    .tech-card {
      min-height: 100px;
      padding: 1rem;
      border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};

      &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
      }
    }

    .grid-header h1 {
      font-size: 1.5rem;
    }
  }
`;
