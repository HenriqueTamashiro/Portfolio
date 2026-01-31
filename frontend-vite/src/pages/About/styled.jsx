import styled from "styled-components";
import background from "../../assets/imgs/imageBackground23.png";

export const Content = styled.div`
  position: relative;

  overflow-x: hidden;
  background: url(${background}) no-repeat center/cover;
  box-shadow: inset #000000 0px 0px 950px 50px;
  display: grid;
  justify-content: center;

  /*Estilos */
  color: #fff;

  p {
    padding: 30px;
    font-size: 20px;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }
`;
