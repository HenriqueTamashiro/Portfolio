import styled from "styled-components";
import * as colors from "../../config/colors";
import holderImg from "../../assets/imgs/bgPicture.png";
import cornerPNG from "../../assets/imgs/cornerPNG.png";

export const WindowLayout = styled.div`
  display: grid;
  position: relative;
  border-radius: 8px;
  max-height: auto;
  max-width: 1500px;
  margin-top: 130px;

  .post-about {
    display: grid;
    background: ${colors.windowBackground};

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
    border: 1px solid ${colors.primaryBorder};
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
    background: transparent;
    padding: 10px 15px;
    z-index: 1;
  }

  .content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    z-index: 0;
  }

  .content > * {
    position: relative;
    z-index: 1;
  }

  .content p {
    margin: -25px 0 0 -25px;
    font-size: 16px;
  }

  .posts-wrapper {
    gap: 15px;
    max-height: 700px;
    overflow-y: auto;

    .presentation {
      margin-left: -10px;
    }
  }

  .img-holder {
    position: relative;
    z-index: 0;
    min-width: auto;
    min-height: auto;
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
