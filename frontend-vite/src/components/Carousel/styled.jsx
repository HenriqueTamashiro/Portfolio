import styled from "styled-components";
import imgBg from "../../assets/imgs/bgCarousel2.png";
import * as colors from "../../config/colors";

export const CarouselStyle = styled.section`
  position: relative;
  width: 100%;
  max-height: 450px;
  height: 300px;
  overflow: hidden;

  border-bottom: 1px ${colors.primaryBorder} solid;
  border-top: 1px ${colors.primaryBorder} solid;

  padding: 30px;

  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 40%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 40%, white 80%, transparent);

  .tittle-carousel {
    position: relative;
    padding: 5px 7px;

    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 25px;

    letter-spacing: -1px;
    clip-path: polygon(5% 0%, 100% 0%, 100% 85%, 95% 100%, 0% 100%, 0% 6px);

    z-index: 1;
  }

  .tittle-carousel::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: transparent;
    border: 1px solid ${colors.primaryGlow};
    border-radius: 8px;
    z-index: -1;
    animation: infinite ease-in-out 15s borderCycling;
  }

  @keyframes borderCycling {
    0% {
      clip-path: polygon(5% 0%, 100% 0%, 100% 0%, 95% 100%, 0% 100%, 0% 90%);
    }
    50% {
      clip-path: polygon(95% 0%, 100% 0%, 100% 85%, 5% 100%, 0% 100%, 0% 20%);
    }
    100% {
      clip-path: polygon(5% 0%, 100% 0%, 100% 0%, 95% 100%, 0% 100%, 0% 90%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${imgBg}) center/cover no-repeat;
    opacity: 0.9;
    z-index: -1;
    min-height: 1200px;
    min-width: 60px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: radial-gradient(
        ${colors.secundaryLightColor} 1px,
        transparent 1px
      ),
      radial-gradient(${colors.primaryLightColor} 1px, transparent 1px),
      linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    background-size: 15px 15px, 70px 70px;
    background-repeat: repeat, repeat;
    background-position: 5px 5px, 0 0;
    z-index: -1;
  }

  p {
    font-size: 20px;
    color: #fff;
  }

  .inner_scroller {
    padding-block: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  color: #fff;

  .react-icon,
  .node-icon,
  .express-icon,
  .tailwind-icon,
  .sequelize-icon,
  .mysql-icon,
  .bi-git,
  .bi-bootstrap-fill,
  .bi-javascript {
    width: 78px;
    height: 78px;
    border-bottom: 1px solid ${colors.primaryBorder};
  }

  svg {
    width: 80px;
    height: 80px;
    border-bottom: 1px solid ${colors.primaryBorder};
  }

  .scroller {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .icon-item {
    display: flex;
    background: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.primaryBorder};
    border-radius: 20px;
    background: ${colors.primaryColor};
    width: 115px;
    height: 120px;

    p {
      margin: 0;
    }
  }

  .title-row {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .divider {
    position: relative;
    height: 1px;
    width: min(200px);

    background-color: ${colors.primaryBorder};
  }

  .scroller[animated="true"] {
    overflow: hidden;

    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      transparent,
      white 4%,
      white 60%,
      transparent,
      transparent
    );
    mask: linear-gradient(
      90deg,
      transparent,
      transparent,
      white 40%,
      white 60%,
      transparent,
      transparent
    );
  }

  .scroller[animated="true"] .inner_scroller {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 30s)
      var(--_animation-direction, forwards) infinite linear;
  }

  .scroller[data-direction="right"] {
    --_animation-direction: reverse;
  }

  .scroller[data-direction="left"] {
    --_animation-direction: forwards;
  }

  .scroller[data-speed="fast"] {
    --_animation-duration: 20s;
  }

  .scroller[data-speed="slow"] {
    --_animation-duration: 20s;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-25%);
    }
  }

  .scroller[animated="true"]:hover .inner_scroller {
    animation-play-state: paused;
  }
`;
