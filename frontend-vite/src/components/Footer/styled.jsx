import styled from "styled-components";
import * as colors from "../../config/colors";
import bgImg from "../../assets/imgs/bgCarousel2.png";

export const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 300px;
  text-align: center;

  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );

  &::before {
    border-top: 1px ${colors.primaryBorder} solid;
    content: "";
    z-index: -1;
    inset: 0;
    position: absolute;
    background: url(${bgImg}) no-repeat center/cover;
  }
`;
