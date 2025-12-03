import styled from "styled-components";

export const Content = styled.div`
  color: #fff;
  margin: 0;

  p {
    font-size: 20px;
  }

  h1 {
    height: 60px;
    min-height: 20px;
    max-height: 50px;
    font-size: clamp(45px, 20px, 60px);
    z-index: 1;
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
