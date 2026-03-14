import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  margin-top: 0;
  width: 100%;
  display: grid;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  padding: 2.75rem 0 1.5rem;

  h1 {
    font-size: clamp(15px, 23px, 30px);
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  @media (width < 900px) {
    margin-bottom: 50px;
  }
`;

export const Holder = styled.div`
  position: relative;
  max-width: 1000px;
  padding: 0 2rem;
  z-index: 2;

  .post-wrapper {
    width: 100%;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
  }

  .gap-timeline {
    display: none;
  }

  .Item {
    position: relative;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: 12px;
    overflow: hidden;
    z-index: 2;
    transition: all 0.3s ease;

    h1 {
      margin: 0 0 0.8rem 0;
      color: ${({ theme }) => theme.colors.textColor};
    }

    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.textMuted};
      line-height: 1.6;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primaryLightColor};
      border-color: ${({ theme }) => theme.colors.tealGlow};
      box-shadow: ${({ theme }) => theme.colors.boxShadowTeal};
    }
  }

  .Item.left,
  .Item.right {
    margin: 0;
  }

  .hiddenSection {
    position: relative;
    opacity: 0;
    transform: translateY(20px);
  }

  .showSection {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  .background-fragment,
  .background-fragment2 {
    display: none;
  }

  .tittle-item {
    display: none;
  }

  .tittle-item::before {
    display: none;
  }

  .bi-laptop,
  .bi-phone,
  .mobile-icon,
  .bi-stack-overflow,
  .bi-fast-forward,
  .bi-gear-wide {
    display: none;
  }

  @media (width < 900px) {
    .Item {
      padding: 1.2rem;
    }

    .Item.left,
    .Item.right {
      grid-column: auto;
      margin: 0;
    }

    .Item {
      align-items: center;
      justify-content: center;
    }

    .gap-timeline {
      display: none;
    }
  }
`;

export const Corner = styled.svg`
  display: none;
`;

export const MidSVG = styled.svg`
  display: none;
`;

export const SectionView = styled.section`
  opacity: 0;
  transform: translateY(40px);
  transition: 100ms ease;

  ${({ $animate }) =>
    $animate &&
    `
    opacity: 1;
    transform: translateY(0);
  `}
`;
