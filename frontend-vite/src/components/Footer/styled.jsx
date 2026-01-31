import styled from "styled-components";
import bgImg from "../../assets/imgs/bgFooter.png";

export const StyledFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px ${({ theme }) => theme.colors.primaryBorder} solid;

  width: 100%;
  height: 300px;

  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );

  &::before {
    content: "";
    z-index: -1;
    inset: 0;
    position: absolute;
    background: url(${bgImg}) no-repeat center/cover;
  }

  a {
    color: white;
    transition: 400ms;
  }
  a:hover {
    color: #ffffffa9;
    transition: 400ms;
  }

  .footerContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .text-container {
    font-size: 20px;
    z-index: 20;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    font-size: 35px;
    gap: 15px;
    z-index: 20;
  }

  .icon-contaienr i {
    cursor: pointer;
  }
`;
