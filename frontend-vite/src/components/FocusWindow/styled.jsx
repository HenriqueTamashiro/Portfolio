import styled from "styled-components";
import * as colors from "../../config/colors";

export const Focus = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-wrap: wrap;
  gap: 2rem;

  .overlay {
    position: absolute;
    inset: 0;
    background: ${colors.primaryColoOpt};
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;

    height: auto;
    z-index: 2;
  }

  .content img {
    max-height: auto;
  }

  .article {
    opacity: 0;
    transform: translateY(60px);
  }

  .article-active {
    display: flex;
    margin-top: 5rem;
    width: 50%;
    transition: opacity 0.8s ease, transform 0.6s ease;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FocusArticle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 20px;
  background: ${colors.secundaryLightColor};
  z-index: 1;

  border-radius: 20px;
  border: 1px solid ${colors.primaryBorder};

  h1 {
    text-align: center;
    font-size: clamp(15px, 5vw, 35px);
  }
  img {
    margin-top: 30px;
    border-bottom: 1px solid ${colors.primaryBorder};
    border-top: 1px solid ${colors.primaryBorder};
  }

  p {
    padding: 15px;
  }

  button {
    position: relative;
    color: ${colors.primaryGlow};
    align-self: flex-end;
    font-size: 30px;
    padding: 5px 10px 0 0;
  }

  button:hover {
    color: ${colors.menuLightColor};
  }

  .article-tittle {
    border-bottom: 1px solid ${colors.primaryBorder};
  }

  .svgCorner {
    content: "";
    position: absolute;
    color: ${colors.secundaryLightColor};
    font-size: 90px;
    top: 50px;
    right: 0;
    width: 80px;
    height: 120px;
    background-size: contain;
    pointer-events: none;
    z-index: -1;
  }
`;
