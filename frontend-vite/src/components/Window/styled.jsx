import styled from "styled-components";
import holderImg from "../../assets/imgs/bgPicture.png";
import cornerPNG from "../../assets/imgs/cornerPNG.png";

export const WindowLayout = styled.div`
  --base-color: ${({ theme }) => theme.colors.menuLightColorOpt};
  --picture-size: min(600px, 90vw);
  --picture-width: min(500px, 80vw);
  --picture-height: min(500px, 80vw);

  display: grid;
  position: relative;

  border-radius: 8px;

  width: 100%;
  max-width: 1500px;

  min-height: 600px;
  margin-top: 50px;

  .post-about {
    display: grid;
    overflow: hidden;
    width: 100%;
    height: auto;
    padding: 30px;

    transition:
      opacity 0.4s ease,
      transform 0.4s ease;

    .corner {
      position: absolute;
      content: url(${cornerPNG});
      width: 17px;
      height: 17px;

      z-index: 2;
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

  .about-container {
    position: relative;
    overflow: hidden;
  }

  .title-row {
    display: flex;
    font-weight: 600;
    flex-direction: column;
    width: fit-content;
    padding: 0 5px 0 5px;
    font-size: 25px;
    text-transform: uppercase;
  }

  .tittle-content > * {
    position: relative;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 10;
    overflow-y: hidden;
  }

  .content-container {
    display: grid;
    position: relative;
    width: 100%;
    padding: 10px 45px 5px 45px;
    z-index: 10;
    overflow: hidden;

    border-radius: 3%;
    margin-left: 15px;
  }

  .content > * {
    position: relative;
    z-index: 1;
  }

  .content p {
    margin: -25px 0 0 -25px;
    font-size: 16px;
  }

  .presentation {
    margin: 10px 17px 25px 5px;
    font-size: 16px;
  }

  .posts-wrapper {
    position: relative;
    max-height: 1200px;
    overflow-y: auto;
    z-index: 9;
    overflow-x: hidden;
  }

  .img-holder {
    width: var(--picture-width);
    height: var(--picture-height);
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    padding-right: 15px;
    position: relative;
    justify-self: center;
  }

  .img-holder::before {
    content: "";
    position: absolute;

    z-index: 2;

    box-shadow:
      ${({ theme }) => theme.colors.menuLightColor} 0px 0px 15px,
      inset ${({ theme }) => theme.colors.menuLightColor} 0px 0px 5px,
      inset ${({ theme }) => theme.colors.menuLightColor} 0px 0px 20px;

    width: var(--picture-width);
    height: 100%;
    border-radius: 50%;
  }

  .img-holder::after {
    content: "";
    position: absolute;
    inset: 5px;

    z-index: 10;
    box-shadow:
      ${({ theme }) => theme.colors.primaryGlow} 0px 0px 15px,
      inset ${({ theme }) => theme.colors.primaryGlow} 0px 0px 5px,
      inset ${({ theme }) => theme.colors.primaryGlow} 0px 0px 20px;

    width: var(--picture-width);
    height: 100%;
    border-radius: 50%;
  }

  .bgPicture {
    z-index: 1;
    position: relative;
    display: block;
    width: var(--picture-width);
    height: var(--picture-height);
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    background: url(${holderImg}) center / cover no-repeat;
  }

  .bgPicture img {
    position: relative;
    width: var(--picture-width);
    height: var(--picture-height);
    border-radius: 50%;
    object-fit: cover;

    z-index: 1;
    box-shadow: inset 0 0 80px 30px #000000dd;
  }

  .img-holder::before {
    animation: blobFloatRotate 15s ease-in-out infinite;
  }
  .img-holder::after {
    animation: blobFloatRotate 15s ease-in-out infinite reverse;
  }

  @media (width > 1115px) {
    .post-about {
      grid-template-columns: 1fr 500px;
    }

    .img-holder {
      top: 100px;
    }
  }

  @keyframes blobFloatRotate {
    0% {
      transform: rotate(0deg) scale(0.99);
      border-radius: 50%;
    }
    25% {
      transform: rotate(90deg) scale(1);
      border-radius: 45%;
    }
    50% {
      transform: rotate(180deg) scale(1.01);
      border-radius: 40%;
    }
    75% {
      transform: rotate(360deg) scale(1);
      border-radius: 45%;
    }
    100% {
      transform: rotate(0deg) scale(0.99);
      border-radius: 50%;
    }
  }
`;
