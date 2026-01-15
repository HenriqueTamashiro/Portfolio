import styled from "styled-components";
import DividerPNG from "../../assets/imgs/divider.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 1.5fr;
  grid-template-rows: auto;

  gap: 1rem;
  margin: 100px auto;

  justify-items: center;
  align-items: center;

  width: min(80rem, 80%);
  height: auto;

  .icons-contact {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;

    justify-items: center;
    align-items: center;
    gap: 20px;

    width: 100%;
    max-width: 100%;
    height: auto;

    h1 {
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size: 1.1rem;
      font-weight: 100;
    }
  }

  .icon {
    display: grid;
    width: 125px;
    height: 125px;

    justify-items: center;
    align-items: center;

    border-radius: 9px;
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};

    i {
      font-size: 70px;
    }
  }

  .text-box {
    width: 100%;
    height: 5rem;
  }

  .gap-contact {
    position: relative;
    width: 2px;
    height: 70%;
  }

  .gap-contact::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${DividerPNG}) center / cover no-repeat;

    mask: linear-gradient(0deg, transparent, white 20%, white 80%, transparent);
  }

  .form-contact {
    position: relative;
    align-items: center;
    justify-items: center;
    border-radius: 8px;

    width: min(100%, 90rem);
    height: min(auto, 50rem);

    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 0.1rem auto;

    .gap-contact {
      position: relative;
      grid-template-rows: 2;
      width: 100%;
      height: 100%;
      transform: rotate(180deg);
      mask: linear-gradient(
        90deg,
        transparent,
        white 20%,
        white 80%,
        transparent
      );
    }
  }
`;
