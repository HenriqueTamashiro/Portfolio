import styled from "styled-components";
import line_divider from "../../assets/imgs/divider.png";

export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 500px;
  display: grid;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: clamp(25px, 30px, 40px);
    text-transform: uppercase;
    font-weight: 600;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  @media (width < 900px) {
    margin-bottom: 50px;
  }
`;

export const Holder = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;

  .post-wrapper {
    width: 100%;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    gap: 5px;
  }

  .gap-timeline {
    grid-column: 2;

    justify-self: center;
    justify-content: center;
    align-items: center;

    top: 100px;

    position: fixed;
    background: white;
    width: 0.1vw;
    height: 100vh;
  }

  .Articles {
    position: relative;
    text-align: center;
    z-index: 2;
    padding: 4px;

    width: 430px;
    height: 200px;
    background: ${({ theme }) => theme.colors.secundaryLightColor};

    border-radius: 30px;

    h1 {
      margin-top: 10px;
    }

    .mediaContainer {
      width: auto;
      height: auto;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    }

    .text-container {
      text-align: start;
      font-size: 17px;
      margin: 10px 10px 100px 10px;
    }
  }

  .Articles.left {
    grid-column: 1;
    justify-self: start;
  }

  .Articles.right {
    margin-top: 150px;
    grid-column: 3;
    justify-self: start;
  }

  @media (width < 900px) {
    .Articles.left,
    .Articles.right {
      grid-column: 2;
      margin-top: 0;
      min-height: 700px;
      min-width: 400px;
      left: 0;
    }
  }
`;
