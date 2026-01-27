import styled from "styled-components";

export const StyledBar = styled.div`
  width: 100%;
  position: fixed;
  top: 48px;

  z-index: 9;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  .bar {
    stroke: ${({ theme }) => theme.colors.primaryBorder};
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
  }
  .bgBar {
    stroke: #05050516;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
  }

  .progress-svg {
    width: 100%;
    height: 26px;
  }
`;
