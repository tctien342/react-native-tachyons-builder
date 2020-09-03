import { normalize, vh, vw } from "./";

export const MIN_DIMENSION = Math.min(vh(100), vw(100));

export const LightStyle: AppStyles = {
  COLORS: {
    PRIME: "#4E8FFE",
    PURPLE: "#9b71de",
    BLUE: "blue",
    RED: "#de2f2f",
    ORANGE: "ogrange",
    GREEN: "green",
    WHITE: "white",
    FONT_LIGHT: "#717171",
    FONT_HARD: "#2b2b2b",
    BACKGROUND_LIGHT: "#f1f1f1",
    BACKGROUND_MED: "ghostwhite",
    BACKGROUND_HARD: "white",
    BLACK: "#000",
    GRAY: "#b6c0cc",
  },
  FONT: {
    SIZE: {
      xs: normalize(12),
      s: normalize(15),
      m: normalize(17),
      l: normalize(20),
      xl: normalize(24),
    },
    WEIGHT: { thin: 200, bold: 700 },
  },
  BORDER: {
    BR_INPUT_RADIUS: "10px",
    BR_BTN_RADIUS: "21px",
    BR_PILL: "39px",
  },
};
export const DarkStyle: AppStyles = {
  ...LightStyle,
  COLORS: {
    ...LightStyle.COLORS,
    FONT_LIGHT: "ghostwhite",
    FONT_HARD: "white",
    BACKGROUND_LIGHT: "#585858",
    BACKGROUND_MED: "#464646",
    BACKGROUND_HARD: "#333333",
  },
  FONT: {
    ...LightStyle.FONT,
    WEIGHT: { thin: 300, bold: 700 },
  },
};
