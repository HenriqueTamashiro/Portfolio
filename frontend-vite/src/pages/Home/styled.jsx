import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 64px;
`;

export const Holder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  gap: 1rem;
  width: min(1200px, 90vw);
  margin: 0 auto;
  min-height: calc(100vh - 64px);
  padding: 4rem 0 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    min-height: auto;
    padding: 3rem 0 2rem;
  }
`;

export const HolderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .divPicture {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profilePicture {
    width: clamp(220px, 28vw, 360px);
    height: clamp(220px, 28vw, 360px);
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 2;
    border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
    box-shadow: 0 0 40px ${({ theme }) => theme.colors.primaryGlow}33,
                inset 0 0 20px ${({ theme }) => theme.colors.primaryGlow}22;
  }

  .lessBgPict,
  .greaterBgPict {
    position: absolute;
    z-index: 1;
    opacity: 0.4;
  }

  .lessBgPict {
    left: -30px;
    top: -20px;
  }

  .greaterBgPict {
    right: -30px;
    bottom: -20px;
  }


`;

export const SectorStyled = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`;

export const SectionView = styled.div`
  width: 100%;
`;

export const SubSector = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: min(1200px, 90vw);
  margin: 0 auto;
  padding: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const SectionHeader = styled.div`
  width: min(1200px, 90vw);
  margin: 0 auto;
  padding: 3rem 0 1.5rem;

  .contentTittle {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    h5 {
      font-size: clamp(0.85rem, 1.5vw, 1rem);
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textMuted};
      margin: 0;
      padding: 4px 12px;
      border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
      border-radius: 20px;
      background: ${({ theme }) => theme.colors.secundaryLightColor};
    }
  }

  .divider {
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryBorder},
      transparent
    );
    min-width: 40px;
    max-width: 200px;
  }
`;
