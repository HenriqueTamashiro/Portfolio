import styled from "styled-components";
import holderImg from "../../assets/imgs/bgPicture.png";

export const WindowLayout = styled.div`
  --picture-width: clamp(200px, 26vw, 320px);
  --picture-height: clamp(200px, 26vw, 320px);

  width: min(1100px, 92vw);
  margin: 0 auto;
  padding: 3rem 0 4rem;

  .post-about {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem;
    align-items: start;
  }

  @media (max-width: 900px) {
    .post-about {
      grid-template-columns: 1fr;
    }
    .img-holder {
      margin: 0 auto;
    }
  }

  /* Profile image */
  .img-holder {
    width: var(--picture-width);
    height: var(--picture-height);
    aspect-ratio: 1 / 1;
    position: relative;
    justify-self: center;
    flex-shrink: 0;
  }

  .img-holder::before {
    content: "";
    position: absolute;
    z-index: 2;
    box-shadow:
      ${({ theme }) => theme.colors.primaryGlow}44 0px 0px 20px,
      inset ${({ theme }) => theme.colors.primaryGlow}22 0px 0px 10px;
    width: var(--picture-width);
    height: 100%;
    border-radius: 50%;
    animation: blobFloatRotate 15s ease-in-out infinite;
  }

  .img-holder::after {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 10;
    box-shadow:
      ${({ theme }) => theme.colors.tealGlow}33 0px 0px 15px,
      inset ${({ theme }) => theme.colors.tealGlow}22 0px 0px 8px;
    width: calc(var(--picture-width) - 10px);
    height: calc(100% - 10px);
    border-radius: 50%;
    animation: blobFloatRotate 15s ease-in-out infinite reverse;
  }

  .bgPicture {
    z-index: 1;
    position: relative;
    display: block;
    width: var(--picture-width);
    height: var(--picture-height);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: url(${holderImg}) center / cover no-repeat;
  }

  .bgPicture img {
    position: relative;
    width: var(--picture-width);
    height: var(--picture-height);
    border-radius: 50%;
    object-fit: cover;
    z-index: 1;
    border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
  }

  @keyframes blobFloatRotate {
    0% { transform: rotate(0deg) scale(0.99); border-radius: 50%; }
    25% { transform: rotate(90deg) scale(1); border-radius: 45%; }
    50% { transform: rotate(180deg) scale(1.01); border-radius: 40%; }
    75% { transform: rotate(360deg) scale(1); border-radius: 45%; }
    100% { transform: rotate(0deg) scale(0.99); border-radius: 50%; }
  }

  /* About content */
  .about-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .posts-wrapper {
    position: relative;
    max-height: 1200px;
    overflow-y: auto;
    z-index: 9;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .presentation {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
    padding: 1rem 1.2rem;
    border-left: 3px solid ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    border-radius: 0 8px 8px 0;
  }

  .content {
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: 10px;
    overflow: hidden;
    transition: border-color 0.3s ease;
  }

  .content:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
  }

  .title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textAccent};
    background: ${({ theme }) => theme.colors.secundaryDarkColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }

  .corner {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primaryGlow};
    opacity: 0.6;
  }

  .content p {
    margin: 0;
    padding: 12px 16px;
    font-size: 0.9rem;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
