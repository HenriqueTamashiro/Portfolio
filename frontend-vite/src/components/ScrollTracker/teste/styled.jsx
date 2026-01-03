import styled from "styled-components";
import * as colors from "../../../config/colors";

export const ScrollTracker = styled.div`
  .scrollCircle {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scrollCircle span {
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    color: #00fff0;
  }
`;
