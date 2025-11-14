import styled from "styled-components";
import * as colors from "../../config/colors";

export const Nav = styled.nav`
  padding-right: clamp(30px, 60vw, 30px);
  height: clamp(60px, 90vw, 60px);
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 1px;

  background: linear-gradient(
    to right,
    ${colors.primaryDarkColor},
    ${colors.menuLightColor}
  );

  a {
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
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
    box-shadow: inset 0 -5px 0 0 ${colors.primaryColor};
    background: ${colors.secundaryLightColor};

    color: #fff;
  }
`;
