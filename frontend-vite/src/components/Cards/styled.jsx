import styled from "styled-components";
import * as colors from "../../config/defaultColors";

export const StyledCards = styled.div`
  /*Organizadores */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  /*Dimensionadores */
  width: auto;
  height: auto;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 25px 25px 25px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 150vw) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 100vw) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 95em) {
    & {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media (max-width: 55em) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  .svgCorner {
    content: "";
    position: absolute;
    color:  ${({ theme }) => theme.colors.secundaryLightColor};
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
    grid-template-rows: auto auto auto auto 1fr;
    z-index: 1;
    border-top: 1px solid  ${({ theme }) => theme.colors.primaryBorder};
    border-bottom: 1px solid  ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 8px;
  }

  .buttonContainer {
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-self: end;
    width: auto;
    height: 100%;
    z-index: 1;
  }

  .tab {
    position: absolute;
    right: 100%;
    top: 0;
    width: 25px;
    height: 100%;
    background:  ${({ theme }) => theme.colors.menuLightColor};
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-right: 1px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;

    cursor: pointer;
    padding: 4px;
  }

  .tab i {
    font-size: 15px;
    margin-bottom: 1px;
  }

  .tab .label {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 8px;
    font-weight: bold;
  }

  .buttonContainer:hover .tab {
    transform: scaleX(1);
  }

  .tab:hover {
    background: ${({ theme }) => theme.colors.menuLightColor};
  }

  .buttn {
    font-weight: 550;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 75px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    background: ${({ theme }) => theme.colors.menuLightColor};
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
    z-index: 2;
    position: relative;
    transition: 400ms;
  }

  .buttn:hover {
    background: ${({ theme }) => theme.colors.secundaryLightColor};
  }

  img,
  video:hover {
    cursor: pointer;
  }
`;

export const Articles = styled.section`
  position: relative;
  min-width: 400px;
  max-width: 640px;
  max-height: auto;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secundaryLightColor};

  h1 {
    font-size: clamp(28px, 3vw, 35px);
    line-height: 1.1;
    font-weight: bold;
    margin: 0;
  }

  .mediaContainer {
    position: relative;
  }

  .mediaContainer .videoContainer,
  .mediaContainer .imageContainer {
    pointer-events: auto;
    object-fit: cover;
    min-width: 400px;
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    z-index: 1;
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

  .article-tittle {
    height: 80px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .article-content {
    text-align: start;
    padding: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 150px;
    margin-bottom: 20px;
  }
`;
