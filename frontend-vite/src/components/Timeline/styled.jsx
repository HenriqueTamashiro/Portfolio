import styled from "styled-components";
import bg_fragment from "../../assets/imgs/circuit2.png";
import bg_fragment2 from "../../assets/imgs/svgBolt.svg";
import background from "../../assets/imgs/background-timeline.png";

export const Content = styled.div`
  --base-color: ${({ theme }) => theme.colors.menuDarkColor};
  --tech-base-poly: #243963;
  --tech-poly: #304c85;
  --base-font: 45px;

  position: relative;
  margin-top: 10px;
  width: 100%;
  display: grid;
  justify-content: center;
  color: #fff;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    height: 100%;
    background: url(${background}) no-repeat center/cover;
    opacity: 0.2;

    z-index: -1;
  }

  h1 {
    font-size: clamp(15px, 23px, 30px);
    text-transform: uppercase;
    font-weight: 600;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  .tech-polygon {
    position: absolute;
    pointer-events: none;
    opacity: 0.4;

    width: auto;
    height: auto;

    z-index: -1;
    top: 440px;
    left: 30%;

    .poly {
      color: var(--tech-base-poly);
      stroke: var(--tech-poly);
    }

    .tech-polygon1 {
      position: absolute;
      top: 0;
      animation: ease-out-tech 10s infinite alternate-reverse;
    }
    .tech-polygon2 {
      position: absolute;
      top: 51px;
      left: 61px;
      animation: ease-out-tech 15s infinite reverse;
    }
    .tech-polygon3 {
      position: absolute;
      top: 75px;
      left: -60px;
      animation: ease-out-tech 8s infinite reverse;
    }
    .tech-polygon4 {
      position: absolute;
      top: 120px;
      left: 0px;
      animation: ease-out-tech 12s infinite;
    }
    .tech-polygon5 {
      position: absolute;
      top: 100px;
      left: 120px;
      animation: ease-out-tech 8s infinite;
    }
    .tech-polygon6 {
      position: absolute;
      top: 145px;
      left: -120px;
      animation: ease-out-tech 4s infinite;
    }

    @keyframes ease-out-tech {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-9px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .tech-wheel {
    position: absolute;
    pointer-events: none;

    width: auto;
    height: auto;

    z-index: -1;
    top: 620px;
    left: 60%;

    opacity: 0.4;

    .wheel {
      color: var(--base-color);
    }

    .tech-fragment1 {
      position: absolute;
      top: 250px;
      left: 0;
      animation: spin-tech 20s infinite;
    }
    .tech-fragment2 {
      position: absolute;
      top: 280px;
      left: 30px;
      animation: spin-tech 12s infinite reverse;
    }
    .tech-fragment3 {
      position: absolute;
      top: 315px;
      left: 60px;
      animation: spin-tech 8s infinite alternate-reverse;
    }

    @keyframes spin-tech {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  @media (width < 900px) {
    margin-bottom: 50px;
  }
`;

export const Holder = styled.div`
  position: relative;
  max-width: 800px;
  padding: 2rem;
  border-radius: 8px;
  z-index: 2;

  .post-wrapper {
    width: 100%;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
  }

  .gap-timeline {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 1%);
    width: 100%;
    height: 100%;
  }

  .Item.left {
    margin-left: -5px;
    margin-top: 320px;
    grid-column: 1;
    justify-self: start;
  }

  .Item.right {
    margin-left: 50px;
    margin-top: 10px;
    grid-column: 3;
    justify-self: start;
  }

  .Item {
    position: relative;
    text-align: center;
    overflow: hidden;
    z-index: 2;
    margin-bottom: 140px;
    width: 350px;
    height: 180px;
    background: ${({ theme }) => theme.colors.windowBackgroundOpt};

    border-radius: 30px;

    h1 {
      margin-top: 10px;
    }

    .bi-laptop,
    .bi-phone {
      position: absolute;
      font-size: var(--base-font);
      z-index: -1;
      opacity: 0.4;
      color: ${({ theme }) => theme.colors.primaryBorder};
    }

    .mobile-icon {
      --stroke-color: ${({ theme }) => theme.colors.windowBackgroundOpt};
      --fill-color: ${({ theme }) => theme.colors.menuDarkColor};
      --background-svg: transparent;

      position: absolute;
      z-index: -1;
      opacity: 0.8;
      width: 140px;
      height: 140px;

      bottom: -8px;
      left: 0px;
    }

    .bi-phone {
      bottom: -10px;
      left: 110px;
    }
    .bi-laptop {
      font-size: calc(var(--base-font) + 70px);
      bottom: -45px;
      left: 0px;
    }

    .bi-stack-overflow {
      color: ${({ theme }) => theme.colors.menuDarkColor};

      position: absolute;
      z-index: -1;
      opacity: 0.8;
      font-size: 100px;

      bottom: -8px;
      left: 0px;
    }

    .bi-fast-forward {
      color: ${({ theme }) => theme.colors.menuDarkColor};

      position: absolute;
      z-index: -1;
      opacity: 0.8;
      font-size: 100px;

      bottom: -15px;
      left: 5px;
    }

    .bi-gear-wide {
      color: ${({ theme }) => theme.colors.menuDarkColor};

      position: absolute;
      z-index: -1;
      opacity: 0.8;
    }

    .gear1 {
      font-size: 100px;

      bottom: -5px;
      left: 5px;
    }
    .gear2 {
      font-size: 50px;
      bottom: -10px;
      left: 90px;
    }
  }

  .hiddenSection {
    position: relative;
    opacity: 0;
    transform: translateY(40px);
  }

  .showSection {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  .background-fragment {
    z-index: 0;
    background: url(${bg_fragment}) center / contain no-repeat;
    position: absolute;
    width: 40px;
    height: 170px;
  }

  .background-fragment2 {
    z-index: 0;
    background: url(${bg_fragment2}) center / contain no-repeat;
    position: absolute;
    width: 50px;
    height: 50px;
  }

  .background-fragment.right {
    top: -5px;
    right: 9px;
  }

  .background-fragment2.left {
    bottom: 0;
    left: 0;
  }

  .tittle-item {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 50px;
  }

  .tittle-item::before {
    content: "";
    position: absolute;
    right: 30px;
    top: -10px;
    background: var(--base-color);
    z-index: -10;
    width: 285px;
    height: 50px;
  }

  .tittle-item h1 {
    position: relative;
    z-index: 1;
  }

  @media (width < 900px) {
    .Item.left,
    .Item.right {
      grid-column: 2;
      margin: 0 0 50px 0;
      padding: 0;
    }

    .Item {
      align-items: center;
      justify-content: center;
    }

    .gap-timeline {
      display: none;
    }
  }
`;

export const Corner = styled.svg`
  position: absolute;
  width: 50px;
  height: 50px;
  color: var(--base-color);
  pointer-events: none;

  &.top-right {
    top: -10px;
    right: -13px;
    transform: scale(-1, -1);
  }

  &.top-left {
    top: -10px;
    left: -13px;
    transform: scale(1, -1);
  }
`;

export const MidSVG = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;

  pointer-events: none;
  z-index: 1;

  .fragment {
    position: absolute;
    top: 100px;
    left: 50%;

    width: 300px;
    height: 100%;
    color: var(--base-color);
  }
`;

export const SectionView = styled.section`
  opacity: 0;
  transform: translateY(40px);
  transition: 100ms ease;

  ${({ $animate }) =>
    $animate &&
    `
    opacity: 1;
    transform: translateY(0);
  `}
`;
