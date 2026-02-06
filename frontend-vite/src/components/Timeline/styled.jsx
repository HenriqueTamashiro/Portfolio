import styled from "styled-components";
import line_divider from "../../assets/imgs/divider.png";
import bg_fragment from "../../assets/imgs/circuit2.png";
import bg_fragment2 from "../../assets/imgs/svgBolt.svg";
import background from "../../assets/imgs/imageBackground23.png";

export const Content = styled.div`
  --base-color: ${({ theme }) => theme.colors.primaryBorder};

  position: relative;
  margin-top: 100px;
  width: 100%;
  display: grid;
  justify-content: center;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: url(${background}) no-repeat center/cover;
    opacity: 0.2;

    z-index: -1;

    -webkit-mask: linear-gradient(
      180deg,
      transparent,
      white 20%,
      white 75%,
      transparent
    );

    mask: linear-gradient(
      180deg,
      transparent,
      white 20%,
      white 75%,
      transparent
    );

    height: 60%;
  }

  h1 {
    font-size: clamp(15px, 25px, 30px);
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
    padding: 15px;
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
    height: fit-content;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
  }

  .gap-timeline {
    position: absolute;
    grid-column: 2;

    justify-self: center;

    position: fixed;
    background: white;
    width: 1px;
    height: 140vh;
  }

  .Item {
    position: relative;
    text-align: center;
    overflow: hidden;
    z-index: 2;

    width: 430px;
    height: 180px;
    background: ${({ theme }) => theme.colors.windowBackgroundOpt};

    border-radius: 30px;

    h1 {
      margin-top: 10px;
    }
  }

  .Item.left {
    margin-bottom: 450px;
    margin-left: 370px;
    grid-column: 1;
    justify-self: start;
  }

  .Item.right {
    margin-right: 350px;
    margin-top: 300px;
    grid-column: 3;
    justify-self: start;
  }

  .hiddenSection {
    opacity: 0;
    transform: translateY(40px);
  }

  .showSection {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  .background-fragment {
    z-index: 0;
    background: url(${bg_fragment}) center / contain no-repeat;
    position: absolute;
    width: 40px;
    height: 170px;
  }

  .background-fragment2 {
    z-index: 0;
    background: url(${bg_fragment2}) center / contain no-repeat;
    position: absolute;
    width: 50px;
    height: 50px;
  }

  .background-fragment.right {
    top: 0;
    right: 0;
  }

  .background-fragment2.left {
    bottom: 0;
    left: 0;
  }

  .tittle-item {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 50px;
  }

  .tittle-item::before {
    content: "";
    position: absolute;
    right: 68px;
    top: -10px;
    background: var(--base-color);
    z-index: -10;
    width: 300px;
    height: 50px;
  }

  .tittle-item h1 {
    position: relative;
    z-index: 1;
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

export const Corner = styled.svg`
  position: absolute;
  width: 50px;
  height: 50px;
  color: var(--base-color);

  pointer-events: none;

  &.top-right {
    top: -10px;
    right: 18px;
    transform: scale(-1, -1);
  }

  &.top-left {
    top: -10px;
    left: 12px;
    transform: scale(1, -1);
  }
`;
