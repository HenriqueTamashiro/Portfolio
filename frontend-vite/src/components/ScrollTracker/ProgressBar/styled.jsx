import styled from "styled-components";
import * as colors from "../../../config/colors";

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
    stroke: ${colors.primaryBorder};
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
    height: 25px;
  }
`;
