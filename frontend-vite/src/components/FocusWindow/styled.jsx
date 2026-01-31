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
    min-width: 350px;
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
  min-width: 400px;
  overflow-y: auto;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secundaryLightColor};
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
    color: ${({ theme }) => theme.colors.primaryColor};
    background: ${({ theme }) => theme.colors.menuLightColor};
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
  }

  .postedContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primaryColor};
    width: 100%;
    height: auto;
    gap: 10px;
    z-index: 2;
    clip-path: polygon(0% 0%, 100% 0, 95% 100%, 0% 100%);
  }

  .posted {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 35px;
    height: 35px;
  }

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.primaryColor};

    clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%);
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 10px;
  }

  .tagIcon {
    width: 35px;
    height: 35px;
  }
`;
