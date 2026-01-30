import bgImg from "../../assets/imgs/imageBackground23.png";

import styled from "styled-components";

export const Content = styled.div`
  color: #fff;
  margin: 0;

  p {
    font-size: 20px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  @keyframes drawLine {
    0% {
      stroke-dashoffset: 800;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -800;
    }
  }
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
        ${({ theme }) => theme.colors.primaryLightColor} 10%,
        ${({ theme }) => theme.colors.primaryGlow} 50%,
        ${({ theme }) => theme.colors.primaryLightColor} 100%
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
      ${({ theme }) => theme.colors.primaryLightColor} 10%,
      ${({ theme }) => theme.colors.primaryGlow} 50%,
      ${({ theme }) => theme.colors.primaryLightColor} 100%
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

export const Container = styled.div`
  width: 100%;
  padding-top: 60px;
  transition: opacity 0.4s ease;

  .contentTittle {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textColor};

    text-align: center;
    font-size: 35px;
    font-weight: 600;
    text-transform: uppercase;

    width: 100%;
    height: 120px;
    max-height: 150px;

    mask: linear-gradient(
      90deg,
      transparent,
      white 40%,
      white 80%,
      transparent
    );

    &::before {
      content: "";
      position: absolute;
      inset: 0;

      background:
        radial-gradient(
          ${({ theme }) => theme.colors.secundaryLightColor} 1px,
          transparent 1px
        ),
        radial-gradient(
          ${({ theme }) => theme.colors.primaryLightColor} 1px,
          transparent 1px
        ),
        linear-gradient(rgba(0, 0, 0, 0.014), rgba(0, 0, 0, 0.014));

      background-size: 15px 15px;
      background-repeat: repeat;
      background-position: 5px 5px;
      z-index: -1;

      mask: linear-gradient(90deg, transparent, white 50%, transparent);
    }

    .divider {
      position: relative;
      height: 1px;
      width: 200px;
      margin: 1px 0 5px;

      background-color: ${({ theme }) => theme.colors.primaryBorder};
    }

    .divider::before,
    .divider::after {
      position: absolute;
      content: "";
      height: 5px;
      width: 5px;
      top: -2px;

      background: ${({ theme }) => theme.colors.primaryGlow};
    }

    .divider::after {
      right: 0;
    }

    .divider::before {
      left: 0;
    }
  }
`;
