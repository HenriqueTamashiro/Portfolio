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
  ${({ theme }) => theme.colors.primaryLinear}

  a {
    color:${({ theme }) => theme.colors.textColor};
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
    /* text-shadow: 0 0 15px ${({ theme }) => theme.colors.primaryGlow}, 0 0 15px ${({ theme }) => theme.colors.primaryGlow}; */
    transition: 800ms;
    box-shadow: inset 0 -4px 0 0 ${({ theme }) => theme.colors.menuLightColor};
    background: ${({ theme }) => theme.colors.secondaryLightColor};

    color:${({ theme }) => theme.colors.textColor};
  }
`;
