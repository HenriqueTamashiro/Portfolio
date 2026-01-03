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
