import styled from "styled-components";
import bgImg from "../assets/imgs/imageBackground23.png";

import * as colors from "../config/defaultColors";

export const SectorStyled = styled.div`
  width: 100%;
`;

export const SubSector = styled.span`
  /*Organizadores */
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: url(${bgImg}) no-repeat center/cover;
    pointer-events: none;
    opacity: 0.7;

    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 85%,
      transparent
    );
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 85%,
      transparent
    );
  }
`;

export const HolderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  /*Estilos */
  color: #ffffff;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }

  .divPicture {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    .lessBgPict {
      transform: translateX(14%);
      width: clamp(200px, 5vw, 200px);
      height: 250px;

      background: linear-gradient(
        to bottom,
        ${colors.primaryLightColor} 10%,
        ${colors.primaryGlow} 50%,
        ${colors.primaryLightColor} 100%
      );
      -webkit-mask: url("src/assets/imgs/lessKey.svg") no-repeat center /
        contain;
      mask: url("src/assets/imgs/lessKey.svg") no-repeat center / contain;

      z-index: -1;
      animation: opacityTransition 5s ease-in-out infinite;
    }
  }

  .greaterBgPict {
    transform: translateX(-22%);
    width: clamp(200px, 5vw, 200px);
    height: 250px;
    background: linear-gradient(
      to bottom,
      ${colors.primaryLightColor} 10%,
      ${colors.primaryGlow} 50%,
      ${colors.primaryLightColor} 100%
    );
    -webkit-mask: url("src/assets/imgs/greaterKey.svg") no-repeat center /
      contain;
    mask: url("src/assets/imgs/greaterKey.svg") no-repeat center / contain;

    z-index: -1;
    animation: opacityTransition 5s ease-in-out infinite;
  }

  @keyframes opacityTransition {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.3;
    }
  }
`;
