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
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .tech-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(1.5rem, 3vw, 2rem);
    min-height: clamp(140px, 20vw, 180px);
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 1;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

    &:hover {
      background: ${({ theme }) => theme.colors.menuLightColorOpt};
      border-color: ${({ theme }) => theme.colors.tealGlow};
      box-shadow: ${({ theme }) => theme.colors.boxShadowTeal};
      transform: translateY(-8px);
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
    }

    .tech-icon {
      width: clamp(40px, 6vw, 120px);
      height: clamp(40px, 6vw, 120px);
      color: ${({ theme }) => theme.colors.textColor};
      transition: all 0.3s ease;
    }

    i {
      font-size: clamp(2rem, 4vw, 15rem);
      color: ${({ theme }) => theme.colors.textColor};
      transition: all 0.3s ease;
    }

    &:hover .tech-icon,
    &:hover i {
      color: ${({ theme }) => theme.colors.tealGlow};
      transform: scale(1.1);
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
      gap: 1.5rem;
      padding: 1.5rem;

      &::before {
        background-image:
          linear-gradient(
            90deg,
            transparent calc(33.33% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(33.33% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(33.33% + 0.5px),
            transparent calc(33.33% + 0.5px),
            transparent calc(66.66% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(66.66% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(66.66% + 0.5px),
            transparent calc(66.66% + 0.5px)
          ),
          linear-gradient(
            180deg,
            transparent calc(50% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(50% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(50% + 0.5px),
            transparent calc(50% + 0.5px)
          );
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem clamp(0.8rem, 3vw, 1.5rem);

    .tech-grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
      padding: 1.2rem;
      max-height: min(30vh, 120px);
      overflow-y: auto;
      overscroll-behavior: contain;

      &::before {
        background-image:
          linear-gradient(
            90deg,
            transparent calc(50% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(50% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(50% + 0.5px),
            transparent calc(50% + 0.5px)
          ),
          linear-gradient(
            180deg,
            transparent calc(50% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(50% - 0.5px),
            ${({ theme }) => theme.colors.primaryBorder} calc(50% + 0.5px),
            transparent calc(50% + 0.5px)
          );
      }

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primaryBorder};
        border-radius: 999px;
      }
    }

    .tech-card {
      min-height: clamp(90px, 25vw, 120px);
      padding: clamp(1rem, 2vw, 1.5rem);
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;

    .tech-grid-container {
      grid-template-columns: 1fr;
      gap: 1rem;
      max-width: 250px;
      max-height: min(60vh, 460px);
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::before {
        display: none;
      }

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        background: transparent;
      }
    }

    .tech-card {
      min-height: 100px;
      padding: 1rem;
    }

    .grid-header h1 {
      font-size: 1.5rem;
    }
  }
`;
