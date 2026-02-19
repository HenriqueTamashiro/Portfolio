import styled, { keyframes } from "styled-components";
import CircuitCircle from "../../assets/imgs/circuitCircle.png";
import Circuit from "../../assets/imgs/circuit2.png";

const dash = keyframes`
  to {
    stroke-dashoffset: -1500;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 500px;
  display: grid;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: clamp(25px, 35px, 40px);
    text-transform: uppercase;
    font-weight: 600;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  .percentScroll {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    z-index: 9999;
    pointer-events: none;
  }

  @media (width < 900px) {
    margin-bottom: 50px;
  }
`;

export const Holder = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  .post-wrapper {
    width: 100%;
  }

  .line {
    stroke: white;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    gap: 50px;
  }

  .Articles {
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};

    position: relative;

    text-align: center;

    border-radius: 8px;

    z-index: 2;

    width: 40vw;
    height: 100%;
    background: ${({ theme }) => theme.colors.secundaryLightColor};

    .mediaContainer {
      width: auto;
      height: auto;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    }

    .text-container {
      text-align: start;
      font-size: 17px;
      margin: 10px 10px 100px 10px;
    }

    h1 {
      margin-top: 20px;
    }
  }

  .Articles.left {
    right: 29px;

    grid-column: 1;
  }

  .Articles.right {
    left: 29px;
    margin-top: 350px;
    grid-column: 3;
  }

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.primaryColor};

    clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%);
    width: 100%;
    height: auto;
    z-index: 1;
    gap: 10px;
  }

  .tagIcon {
    width: 35px;
    height: 35px;
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

  @media (width < 900px) {
    .Articles.left,
    .Articles.right {
      grid-column: 2;
      margin-top: 0;
      min-height: 700px;
      min-width: 400px;
      left: 0;
    }
  }
`;

export const CircuitWrapper = styled.div`
  grid-column: 2;
  position: relative;
  width: clamp(50px, 12vw, 800px);
  height: 100%;
  background: ${({ theme }) => theme.colors.secundaryLightColor};
  top: var(--nav-height, 80px);

  display: flex;
  justify-content: center;

  z-index: 1;

  clip-path: polygon(
    0% 3%,
    5% 2%,
    50% 2%,
    55% 3%,
    100% 3%,
    95% 3%,
    100% 4%,
    100% 95%,
    95% 96%,
    60% 96%,
    55% 95%,
    5% 95%,
    0% 94%
  );

  @media (width < 900px) {
    & {
      right: 50px;
    }
  }

  .tittle-circuit {
    align-self: center;
    text-align: center;
    align-items: center;
    z-index: 9999;
    position: absolute;
  }

  .tittle-circuit h1 {
    font-size: 38px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-weight: bold;
    letter-spacing: -4px;
    z-index: 9999;
  }
`;

export const MiddleContent = styled.div`
  grid-column: 2;
  position: sticky;

  top: 0;

  display: flex;
  justify-content: center;
  pointer-events: none;

  height: 93vh;
  margin-top: -1000px;
  z-index: 9;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .tech-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .tech {
    background: url(${CircuitCircle}) center / contain no-repeat;
    position: absolute;
    width: clamp(1vw, 10vw, 10vw);
    height: clamp(1vh, 15vh, 18vh);

    z-index: 2;
    pointer-events: none;
  }
  .tech2 {
    background: url(${Circuit}) center / contain no-repeat;
    position: absolute;
    width: clamp(2vw, 30vw, 30vw);
    height: clamp(2vh, 30vh, 30vh);

    z-index: 2;
    pointer-events: none;
  }

  .tech-corner-top-right {
    position: absolute;
    top: 5%;
    right: -35%;
  }
  .tech-corner-bottom-right {
    position: absolute;
    bottom: 5%;
    right: -35%;
    transform: rotateX(180deg);
  }
  .tech2-corner-bottom-left {
    position: absolute;
    bottom: 5%;
    left: -110%;
  }
  .tech2-corner-top-left {
    position: absolute;
    top: 4%;
    left: -110%;
    transform: rotateX(180deg);
  }

  .circuit {
    margin: 0%;
    width: auto;
    height: auto;
    min-height: fit-content;
    min-width: fit-content;
  }

  .circuit-path {
    stroke: ${({ theme }) => theme.colors.primaryBorder};
    stroke-width: 4;
    fill: none;

    stroke-dasharray: 750;
    stroke-dashoffset: 0;

    animation: ${dash} 9s linear infinite;
  }

  .circuit-pathBg {
    stroke: ${({ theme }) => theme.colors.primaryDarkColor};
    stroke-width: 5;
    fill: none;
  }

  circle {
    fill: ${({ theme }) => theme.colors.primaryGlow};
    animation: pulse 2s ease-in-out infinite;
  }
  rect {
    fill: ${({ theme }) => theme.colors.primaryGlow};
    animation: pulse 2s ease-in-out infinite;
  }

  @media (width < 900px) {
    min-width: 90px;
    height: 100svh;
    width: auto;
    gap: 1em;
    grid-column: 3;
    justify-content: right;
    pointer-events: none;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
  }
`;
