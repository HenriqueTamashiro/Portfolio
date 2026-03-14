import styled from "styled-components";

export const StyledCards = styled.div`
  display: contents;
`;

export const Articles = styled.section`
  position: relative;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tealGlow};
    box-shadow: ${({ theme }) => theme.colors.boxShadowTeal};
    transform: translateY(-6px);
  }

  .cards {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .article-tittle {
    padding: 16px 20px 8px;
    h1 {
      font-size: clamp(1rem, 2vw, 1.2rem);
      line-height: 1.3;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.textColor};
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 20px 10px;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.colors.primaryColor};
  }

  .tagIcon {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }

  .tagIcon:hover {
    opacity: 1;
  }

  .mediaContainer {
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }

  .mediaContainer img,
  .mediaContainer video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover .mediaContainer img,
  &:hover .mediaContainer video {
    transform: scale(1.03);
  }

  .mediaContainer .videoContainer,
  .mediaContainer .imageContainer {
    pointer-events: auto;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .postedContainer {
    display: flex;
    align-items: center;
    gap: 8px;

    background: ${({ theme }) => theme.colors.secundaryDarkColor};
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
    align-items: center;
    justify-content: center;
  }

  .posted {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 14px;
  }

  .article-content {
    padding: 12px 20px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textMuted};
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.6;
  }

  .buttonContainer {
    display: flex;
    align-items: stretch;
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
    margin-top: auto;
  }

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    border: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    text-decoration: none;
    cursor: pointer;
    transition:
      background 0.2s ease,
      color 0.2s ease;
    font-size: 13px;
    gap: 3px;
    border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }

  .tab:hover {
    background: ${({ theme }) => theme.colors.menuLightColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  .tab i {
    font-size: 14px;
  }

  .tab .label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .tab.tab-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .buttn {
    flex: 1;
    font-weight: 600;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: pointer;
    border: 0;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .buttn:hover {
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  img,
  video {
    cursor: pointer;
  }
`;
