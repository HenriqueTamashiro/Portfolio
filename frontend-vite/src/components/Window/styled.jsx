import styled from "styled-components";
import * as colors from "../../config/colors";
import holderImg from "../../assets/imgs/bgPicture.png";

export const WindowLayout = styled.div`
  display: grid;
  position: relative;
  border-radius: 8px;
  max-height: 1300px;
  max-width: 1500px;

  .about-container {
    position: relative;
    max-height: 1300px;
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
    -webkit-mask: linear-gradient(90deg, transparent, white 50%, transparent);
    z-index: 0;
  }

  .content > * {
    position: relative;
    z-index: 1;
  }

  .content {
    border-bottom-left-radius: 8px;
    width: 100%;
    height: 100%;
    background: #062752;
    max-height: 700px;
    overflow-y: scroll;
    position: relative;
    z-index: 0;
  }

  .post-about {
    display: grid;

    margin: 80px;

    border-radius: 8px;
    max-width: 100%;

    border-bottom: 1px solid ${colors.primaryBorder};
    border-top: 1px solid ${colors.primaryBorder};
    background: ${colors.secundaryLightColor};
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

  @media (width > 875px) {
    .post-about {
      grid-template-columns: 1fr 500px;
    }
  }
`;
