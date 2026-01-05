import { css } from "styled-components";

export const themeTeste = {
  name: "dark",

  colors: {
    primaryColor: "#000a23",
    primaryDarkColor: "#00050e",

    primaryColorOpt: "#001038fc",
    primaryDarkColorOpt: "#00050ec7",
    primaryLightColorOpt: "#000933f6",
    tagsDarkColor: "#101c3b",

    primaryLightColor: "#2b3450",
    secundaryLightColor: "#76a1ff27",
    boxShadowLightColor: "#76a1ff27  0 0 3px 1px;",
    boxShadowMenuLightColor: "#76a1ff5c 0 0 3px 1px;",

    secundaryDarkColor: "#041330",

    secundaryGlow: "#6b9aff",
    primaryGlow: "#76a1ff",
    primaryBorder: "#486299",

    menuLightColor: "#76a1ff5c",
    windowBackground: "#0627525c",

    textColor: "#fff",

    gradients: {
      primary: css`
        background: linear-gradient(
          to right,
          ${({ theme }) => theme.colors.primaryColor},
          ${({ theme }) => theme.colors.secundaryLightColor}
        );
      `,
    },
  },
};
