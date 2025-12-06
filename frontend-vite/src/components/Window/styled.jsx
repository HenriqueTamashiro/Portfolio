import styled from "styled-components";
import * as colors from "../../config/colors";
import holderImg from "../../assets/imgs/imageBackground23.png";

export const WindowLayout = styled.div`
  display: grid;
  position: relative;

  border-radius: 8px;
  max-height: 1300px;
  max-width: 1500px;

  .post-about {
    display: grid;

    margin: 80px;
    padding: 10px;

    border-radius: 8px;
    max-height: 1300px;
    max-width: 1500px;

    border-bottom: 1px solid ${colors.primaryBorder};
    border-top: 1px solid ${colors.primaryBorder};
    background: ${colors.secundaryLightColor};
  }

  .img-holder {
    padding: 10px;
    position: relative;
    z-index: 0;
    border: 1px solid ${colors.primaryBorder};
    border-radius: 8px;

    min-width: 200px;
    min-height: 100px;
  }

  .img-holder::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${holderImg}) no-repeat center/cover;
    opacity: 0.7;
    border-radius: 8px;
    z-index: 0;
    max-width: 100%;
  }

  .img-holder > img {
    position: relative;
    z-index: 1;
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (width > 500px) {
    .post-about {
      grid-template-columns: 1fr 500px;
    }
  }
`;
