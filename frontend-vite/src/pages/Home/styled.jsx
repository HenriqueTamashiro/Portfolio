import styled from "styled-components";
import * as colors from "../../config/colors";

export const Content = styled.div`
  /*Organizadores */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 50px;
  margin-bottom: 20px;
  margin-top: 20px;

  /*Dimensionadores */
  width: auto;
  height: auto;
  margin: 30px auto;

  @media (max-width: 105em) {
    & {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media (max-width: 68em) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  /*Estilos */
  color: #fff;

  p {
    font-size: 20px;
  }

  h1 {
    height: 60px;
    min-height: 20px;
    max-height: 50px;
    font-size: clamp(45px, 20px, 60px);
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }
`;

export const Articles = styled.section`
  position: relative;
  min-width: 400px;
  max-width: 640px;
  max-height: auto;
  border-radius: 8px;
  background: ${colors.secundaryLightColor};

  button {
    margin-top: 40px;
  }

  h1 {
    font-size: clamp(28px, 3vw, 35px);
    line-height: 1.1;
    font-weight: bold;
    margin: 0;
  }

  .media-container video,
  img {
    pointer-events: auto;
    object-fit: cover;
    min-width: 400px;
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-bottom: 1px solid ${colors.primaryBorder};
    border-top: 1px solid ${colors.primaryBorder};
  }

  .article-tittle {
    height: 80px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .article-content {
    padding: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 150px;
  }

  .svgCorner {
    content: "";
    position: absolute;
    color: ${colors.secundaryLightColor};
    top: 10px;
    right: 1px;
    width: 80px;
    height: 120px;
    background-size: contain;
    pointer-events: none;
    z-index: -1;
  }

  .cards {
    height: 100%;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
  }

  .buttonContainer {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    justify-self: end;
    width: 300px;
    height: auto;
  }

  .buttonContainer::before {
    content: "";
    position: relative;
    width: 15px;
    height: 42px;
    background: #ffffff;
  }

  .bottom.outline {
    text-decoration: none;
    padding: 0.8em 1.6em;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: clamp(0.8rem, 1.2vw, 1rem);
    width: 200px;
    border-bottom-right-radius: 8px;
    transition: clip-path 0.4s ease;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    border: 1px solid ${colors.primaryBorder};
    background: ${colors.menuLightColor};
    color: #fff;
  }

  .bottom.outline:hover {
    background: ${colors.secundaryLightColor};
    color: #fff;
    border: 1px solid ${colors.primaryBorder};
  }

  img,
  video:hover {
    cursor: pointer;
  }
`;
