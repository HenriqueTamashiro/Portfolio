import styled from "styled-components";

export const HeroStyle = styled.section`
  .hero {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: "Inter", "Poppins", sans-serif;
  }

  .hero-content {
    max-width: 620px;
  }

  .intro {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .intro h2 {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textMuted};
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .dot {
    color: ${({ theme }) => theme.colors.tealGlow};
  }

  .line {
    width: 60px;
    height: 3px;
    margin: 0.6rem 0;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    animation: drawLine 18s linear infinite;
  }

  @keyframes drawLine {
    0% { stroke-dashoffset: 800; }
    50% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -800; }
  }

  .intro h3 {
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .name {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textColor};
  }

  .intro h1 {
    font-size: clamp(2rem, 5.5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0.4rem 0 0.2rem;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.textColor} 0%,
      ${({ theme }) => theme.colors.primaryGlow} 40%,
      ${({ theme }) => theme.colors.tealGlow} 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 8s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .btn {
    text-decoration: none;
    padding: 0.65em 1.5em;
    border-radius: 8px;
    font-weight: 600;
    font-size: clamp(0.85rem, 1.2vw, 0.95rem);
    transition: all 0.25s ease;
    letter-spacing: 0.01em;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .btn.primary {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.menuLightColor}, #1a4a8a);
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.borderAccent};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.menuLightColorOpt};
  }

  .btn.primary:hover {
    background: linear-gradient(135deg, #1a4a8a, ${({ theme }) => theme.colors.primaryGlow});
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.boxShadowLightColor};
    transform: translateY(-1px);
  }

  .btn.outline {
    background: transparent;
    color: ${({ theme }) => theme.colors.textColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  }

  .btn.outline:hover {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
    color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .hero {
      padding-left: 0;
    }
    .intro h1 {
      white-space: normal;
      overflow-wrap: anywhere;
    }
    .buttons {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
