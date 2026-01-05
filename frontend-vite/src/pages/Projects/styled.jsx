import styled from "styled-components";

export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 500px;
  display: grid;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: clamp(25px, 35px, 40px);
    text-transform: uppercase;
    font-weight: 600;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  .percentScroll {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    z-index: 9999;
    pointer-events: none;
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

  .middle-content {
    position: absolute;
    display: flex;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    pointer-events: none;
    z-index: -10;
  }

  .middle-svg {
    width: 200px; /* ou o que fizer sentido */
    height: 100%;
  }

  .line {
    stroke: white;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    position: relative; /* IMPORTANTE */
  }

  .Articles {
    position: relative;
    text-align: center;

    padding-top: 10px;

    width: 40vw;
    height: 100%;
    background: ${({ theme }) => theme.colors.secundaryLightColor};

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

    h1 {
      margin-top: 50px;
    }
  }

  .Articles.left {
    right: 29px;
    grid-column: 1;
    justify-self: end;
    clip-path: polygon(
      0% 4%,
      45% 4%,
      50% 1%,
      100% 1%,
      95% 1%,
      100% 4%,
      100% 94%,
      95% 97%,
      45% 97%,
      40% 100%,
      0% 100%
    );
  }

  .Articles.right {
    left: 29px;
    margin-top: 350px;
    grid-column: 3;
    justify-self: start;
    clip-path: polygon(
      0% 4%,
      5% 1%,
      50% 1%,
      55% 4%,
      100% 4%,
      100% 4%,
      100% 95%,
      100% 100%,
      60% 100%,
      55% 97%,
      5% 97%,
      0% 95%
    );
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

    .Articles.left {
      clip-path: polygon(
        0% 2%,
        45% 2%,
        50% 0%,
        100% 0%,
        95% 0%,
        100% 2%,
        100% 92%,
        95% 95%,
        45% 95%,
        40% 97%,
        0% 97%
      );
    }

    .Articles.right {
      clip-path: polygon(
        0% 3%,
        5% 0%,
        50% 0%,
        55% 3%,
        100% 3%,
        100% 5%,
        100% 95%,
        100% 98%,
        60% 98%,
        55% 95%,
        5% 95%,
        0% 90%
      );
    }

    .section-wrapper {
      gap: 2rem;
    }
  }
`;
