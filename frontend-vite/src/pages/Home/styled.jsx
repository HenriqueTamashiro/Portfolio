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
    padding: 30px;
    font-size: 20px;
  }

  h1 {
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
  max-width: 540px;
  border-radius: 20px;
  background: ${colors.secundaryLightColor};

  h1 {
    min-height: 20px;
    max-height: 50px;
    flex-wrap: nowrap;
    text-align: center;
    font-size: clamp(20px, 2vw, 28px);
  }

  .media-container video,
  img {
    pointer-events: auto;
    object-fit: cover;
    min-width: 400px;
    width: auto;
    height: 350px;
    overflow: hidden;
    border-bottom: 1px solid ${colors.primaryBorder};
    border-top: 1px solid ${colors.primaryBorder};
  }

  .article-tittle {
    padding: 10px;
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

  img,
  video:hover {
    cursor: pointer;
  }
`;
