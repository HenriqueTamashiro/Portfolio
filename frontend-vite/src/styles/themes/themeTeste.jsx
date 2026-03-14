import { css } from "styled-components";

export const themeTeste = {
  name: "dark",
  colors: {
    /* Backgrounds */
    primaryColor: "#0d0d1a",
    primaryDarkColor: "#08080f",
    primaryColorOpt: "#0d0d1afc",
    primaryDarkColorOpt: "#08080fc7",
    primaryLightColorOpt: "#0d0d1af6",

    /* Surface / Card backgrounds */
    tagsDarkColor: "#141428",
    primaryLightColor: "#1e1e38",
    secundaryLightColor: "#ffffff0f",
    cardBackground: "#141428",
    cardBorder: "#ffffff1a",
    cardBorderHover: "#5b8cff55",

    /* Shadows */
    boxShadowLightColor: "#5b8cff33 0 0 12px 2px",
    boxShadowMenuLightColor: "#5b8cff55 0 0 8px 1px",

    /* Dark surfaces */
    secundaryDarkColor: "#0a0a18",
    windowBackground: "#141428cc",
    windowBackgroundOpt: "#0a0a18",
    inputBackground: "#0d0d1a",

    /* Glows / Accents */
    secundaryGlow: "#5b8cff",
    primaryGlow: "#6e9fff",
    tealGlow: "#00c9b1",
    purpleGlow: "#a855f7",

    /* Borders */
    primaryBorder: "#2a2a4a",
    borderAccent: "#5b8cff44",

    /* Menu */
    menuLightColor: "#1e3a6e",
    menuDarkColor: "#0f1f3d",
    menuLightColorOpt: "#1e3a6e55",

    /* Text */
    textColor: "#e8e8f0",
    textMuted: "#8888aa",
    textAccent: "#6e9fff",

    /* HOT badge */
    hotColor: "#ff4d4f",

    gradients: {
      primary: css`
        background: linear-gradient(
          135deg,
          #3b1fa0 0%,
          #0d0d1a 40%,
          #0a2a2a 100%
        );
      `,
    },
  },
};
