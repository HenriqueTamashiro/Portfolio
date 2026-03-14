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
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    justify-items: start;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    height: auto;

    h1 {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.colors.textColor};
      margin: 0;
    }

    p {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textMuted};
      margin: 0;
    }
  }

  .icon {
    display: flex;
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    transition: border-color 0.2s ease;

    i {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.primaryGlow};
    }
  }

  .icon:hover {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 1.5rem;

    .icons-contact {
      grid-template-columns: auto 1fr;
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
`;
