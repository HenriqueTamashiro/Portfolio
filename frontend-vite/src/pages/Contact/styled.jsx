import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1.5fr;
  grid-template-rows: auto;
  gap: 2rem;
  margin: 0 auto;
  padding: 120px clamp(16px, 5vw, 60px) 4rem;
  justify-items: center;
  align-items: start;
  width: min(1100px, 92vw);
  height: auto;

  .icons-contact {
    display: flex;
    flex-direction: column;
    justify-items: start;
    align-items: flex-start;
    gap: 3rem;
    width: 100%;
    max-width: 100%;
    height: auto;

    h1 {
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.colors.textColor};
      margin: 0 0 0.5rem 0;
    }

    p {
      font-size: clamp(1rem, 1.8vw, 1.3rem);
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primaryGlow};
      margin: 0;
    }
  }

  .icon {
    display: flex;
    width: clamp(80px, 12vw, 120px);
    height: clamp(80px, 12vw, 120px);
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    transition: all 0.3s ease;

    i {
      font-size: clamp(2.2rem, 3.5vw, 3rem);
      color: ${({ theme }) => theme.colors.primaryGlow};
    }
  }

  .icon:hover {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primaryGlow}22;
    transform: translateY(-4px);
  }

  .text-box {
    width: 100%;
  }

  .gap-contact {
    position: relative;
    width: 1px;
    height: 100%;
    min-height: 200px;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.colors.primaryBorder} 20%,
      ${({ theme }) => theme.colors.primaryBorder} 80%,
      transparent
    );
  }

  .form-contact {
    position: relative;
    align-items: center;
    justify-items: center;
    border-radius: 12px;
    width: 100%;
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 2rem;
    padding: 80px clamp(1rem, 3vw, 2rem) 3rem;

    .icons-contact {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .text-box {
      width: auto;
    }

    .gap-contact {
      width: 100%;
      height: 1px;
      min-height: unset;
      background: linear-gradient(
        90deg,
        transparent,
        ${({ theme }) => theme.colors.primaryBorder} 20%,
        ${({ theme }) => theme.colors.primaryBorder} 80%,
        transparent
      );
    }
  }

  @media (max-width: 600px) {
    padding: 60px 1rem 2rem;
    gap: 1.5rem;

    .icons-contact {
      gap: 2rem;
    }

    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.95rem;
    }

    .icon {
      width: clamp(70px, 18vw, 100px);
      height: clamp(70px, 18vw, 100px);

      i {
        font-size: clamp(1.8rem, 3vw, 2.5rem);
      }
    }
  }
`;
