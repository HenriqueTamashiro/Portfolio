import styled from "styled-components";
import * as colors from "../../config/defaultColors";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding-right: clamp(30px, 60vw, 30px);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 1px;
  z-index: 99;
  backdrop-filter: blur(20px);
  ${colors.primaryLinear}

  a {
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 85px;
    transition: 400ms;
  }

  a:hover {
    /* text-shadow: 0 0 15px ${colors.primaryGlow}, 0 0 15px ${colors.primaryGlow}; */
    transition: 800ms;
    box-shadow: inset 0 -4px 0 0 ${colors.menuLightColor};
    background: ${colors.secundaryLightColor};

    color: #fff;
  }
`;
