import styled from "styled-components";

export const TechTableStyle = styled.section`
  position: relative;
  width: 100%;
  padding: 3rem clamp(1rem, 5vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  background: ${({ theme }) => theme.colors.secundaryLightColor};

  .table-header {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: clamp(1.8rem, 4vw, 2.4rem);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textColor};
      margin: 0 0 0.5rem 0;
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }

    p {
      font-size: clamp(0.9rem, 1.5vw, 1.1rem);
      color: ${({ theme }) => theme.colors.textMuted};
      margin: 0;
    }
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    background: ${({ theme }) => theme.colors.cardBackground};
  }

  .tech-table {
    width: 100%;
    border-collapse: collapse;
    font-size: clamp(0.9rem, 1.2vw, 1.1rem);

    thead {
      background: ${({ theme }) => theme.colors.secundaryDarkColor};
      border-bottom: 2px solid ${({ theme }) => theme.colors.primaryGlow};
    }

    th {
      padding: 1rem 1.5rem;
      text-align: left;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textAccent};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: clamp(0.85rem, 1vw, 1rem);
    }

    tbody tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
      transition: all 0.3s ease;
    }

    tbody tr:hover {
      background: ${({ theme }) => theme.colors.menuLightColorOpt};
      border-bottom-color: ${({ theme }) => theme.colors.primaryGlow};
    }

    tbody tr:last-child {
      border-bottom: none;
    }

    td {
      padding: 1.2rem 1.5rem;
      color: ${({ theme }) => theme.colors.textMuted};
    }

    .tech-name {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textColor};
    }

    .tech-category {
      color: ${({ theme }) => theme.colors.primaryGlow};
      font-weight: 500;
      text-transform: capitalize;
    }

    .tech-icon-cell {
      text-align: center;
    }
  }

  .tech-icon {
    width: clamp(32px, 4vw, 48px);
    height: clamp(32px, 4vw, 48px);
    color: ${({ theme }) => theme.colors.primaryGlow};
    transition: all 0.3s ease;
  }

  .tech-row:hover .tech-icon {
    color: ${({ theme }) => theme.colors.tealGlow};
    transform: scale(1.1);
  }

  i {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: ${({ theme }) => theme.colors.primaryGlow};
    transition: all 0.3s ease;
  }

  .tech-row:hover i {
    color: ${({ theme }) => theme.colors.tealGlow};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .tech-table {
      min-width: 100%;
    }

    th,
    td {
      padding: 0.8rem 1rem;
    }

    .tech-icon {
      width: 36px;
      height: 36px;
    }

    i {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    th,
    td {
      padding: 0.6rem 0.8rem;
      font-size: 0.85rem;
    }

    .tech-name {
      font-size: 0.9rem;
    }

    .tech-icon {
      width: 28px;
      height: 28px;
    }

    i {
      font-size: 1.2rem;
    }
  }
`;
