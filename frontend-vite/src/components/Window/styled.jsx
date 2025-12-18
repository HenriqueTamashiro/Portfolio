import styled from "styled-components";
import * as colors from "../../config/colors";
import holderImg from "../../assets/imgs/bgPicture.png";

export const WindowLayout = styled.div`
  display: grid;
  position: relative;
  border-radius: 8px;
  max-height: 1300px;
  max-width: 1500px;

  .post-about {
    display: grid;

    margin: 80px;

    border-radius: 8px;
    max-width: 100%;

    border-bottom: 1px solid ${colors.primaryBorder};
    border-top: 1px solid ${colors.primaryBorder};
    background: ${colors.windowBackground};
  }

  .about-container {
    position: relative;
  }

  .tittle-content > * {
    position: relative;
    z-index: 1;
  }

  .tittle-content {
    position: relative;
    padding: 5px;
    width: 100%;
    background: ${colors.primaryColor};
    border-bottom: 1px solid ${colors.primaryBorder};
    z-index: 0;
    text-align: center;

    h1 {
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 70px;
    }
  }

  .tittle-content::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ${colors.secundaryLightColor} 1px,
        transparent 1px
      ),
      radial-gradient(${colors.primaryLightColor} 1px, transparent 1px),
      linear-gradient(rgba(0, 0, 0, 0.014), rgba(0, 0, 0, 0.014));
    background-size: 15px 15px;
    background-position: 5px 5px;
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    z-index: 0;
  }

  .content {
    position: relative;
    background: transparent;
    padding: 10px 15px;
    z-index: 1;

    .corner {
      position: absolute;
      content: "";
      width: 15px;
      height: 15px;
      border: 2px solid ${colors.primaryGlow};
    }

    .corner-top-left {
      left: -1px;
      top: -1px;
      clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    }
    .corner-top-right {
      right: -1px;
      top: -1px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    }
    .corner-bottom-left {
      left: -1px;
      bottom: -1px;
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
    }
    .corner-bottom-right {
      right: -1px;
      bottom: -1px;
      clip-path: polygon(100% 100%, 0% 100%, 100% 0%);
    }
  }

  .content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.primaryBorder};
    z-index: 0;
  }

  .content > * {
    position: relative;
    z-index: 1;
  }

  .content p {
    margin: -15px 0;
  }

  .content h2 {
    text-align: center;
  }

  .title-row {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .divider {
    position: relative;
    height: 1px;
    width: 50%;
    margin: 1px 0 5px;
    background-color: ${colors.primaryBorder};
  }

  .divider::before,
  .divider::after {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    top: -2px;
    background: ${colors.primaryGlow};
  }
  .divider::after {
    right: 0;
  }

  .circle {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: transparent;
    border-radius: 100%;
    border: 1px solid ${colors.primaryBorder};
    z-index: -1;
    clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
    animation: infinite ease-in-out 15s borderCycling2;
  }

  @keyframes borderCycling2 {
    0% {
      clip-path: polygon(50% 50%, 50% 0%, 100% 0%);
    }
    50% {
      clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 100% 0%, 100% 0%);
    }
  }

  .posts-wrapper {
    gap: 15px;
    max-height: 700px;
    overflow-y: auto;
    padding: 10px;
    background: #051f41;
  }

  .img-holder {
    position: relative;
    z-index: 0;
    min-width: 300px;
    min-height: 400px;
  }

  .bgPicture {
    position: relative;
    display: block;

    width: 100%;
    height: 100%;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: url(${holderImg}) center / cover no-repeat;
  }

  .bgPicture > img {
    position: relative;

    width: 100%;
    height: 100%;

    object-fit: cover;

    z-index: 1;
    box-shadow: inset 0 0 80px 30px #000000dd;
  }

  @media (width > 1115px) {
    .post-about {
      grid-template-columns: 1fr 500px;
    }
  }
`;
