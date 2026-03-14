import styled from "styled-components";

export const Focus = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;

  align-items: flex-start;
  justify-content: center;

  .overlay {
    display: grid;
    justify-items: center;

    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: auto;
    inset: 0;
    background: ${({ theme }) => theme.colors.primaryColorOpt};
  }

  .content {
    object-fit: cover;
    width: 100%;
    min-width: auto;
    height: 500px;
    max-height: 80vh;
    overflow-y: hidden;

    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    display: flex;
    align-items: center;
    flex-direction: column;

    height: auto;
    z-index: 2;
  }

  .description {
    padding: 20px 20px 20px 20px;

    h4 {
      text-transform: uppercase;
      font-weight: 500;
      border-bottom: 3px solid ${({ theme }) => theme.colors.primaryGlow};

      border-radius: 5px;
      width: fit-content;
      padding: 2px;
    }

    .contents {
      margin: 0;
      font-size: 14px;
    }
  }

  /* Efeito de transição */
  .article {
    opacity: 0;
    transform: translateY(60px);
  }

  .article-active {
    display: flex;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    max-width: 65%;
    padding-bottom: 45px;

    transition:
      opacity 0.8s ease,
      transform 0.6s ease;
    opacity: 1;
  }
`;

export const FocusArticle = styled.div`
  display: grid;
  justify-self: center;
  height: fit-content;
  min-width: 300px;
  overflow-y: auto;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBackground};
  z-index: 1;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};

  h1 {
    text-align: center;
    font-size: clamp(15px, 5vw, 35px);
  }

  p {
    font-size: 20px;
    text-align: start;
    padding: 35px;
    white-space: pre-line;
  }

  button {
    width: 60px;

    height: 40px;
    display: flex;
    position: relative;
    justify-self: end;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
    color: ${({ theme }) => theme.colors.primaryGlow};
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    cursor: pointer;
    z-index: 2;
    font-size: 40px;
    transition: 600ms;
  }

  button:hover {
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.secundaryLightColor};
  }

  button > i {
    font-size: 25px;
  }

  .article-tittle h1 {
    font-size: 40px;
    height: 90px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
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
    font-size: 18px;
  }

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.primaryColor};

    gap: 8px;
    padding: 6px 20px 10px;
    flex-wrap: wrap;
  }

  .tagIcon {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }
  .tagIcon:hover {
    opacity: 1;
  }
`;
