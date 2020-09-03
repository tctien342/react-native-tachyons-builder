export const ColorBuilder: StringBuilder = (style: AppStyles) => ({
  white: () => ({ color: style.COLORS.WHITE }),
  hard: () => ({ color: style.COLORS.FONT_HARD }),
  light: () => ({ color: style.COLORS.FONT_LIGHT }),
  prime: () => ({ color: style.COLORS.PRIME }),
  purble: () => ({ color: style.COLORS.PURPLE }),
  blue: () => ({ color: style.COLORS.BLUE }),
  orange: () => ({ color: style.COLORS.ORANGE }),
  red: () => ({ color: style.COLORS.RED }),
  green: () => ({ color: style.COLORS.GREEN }),
  black: () => ({ color: style.COLORS.BLACK }),
  o: (opa) => ({
    opacity: (opa as number) > 1 ? (opa as number) / 100 : (opa as number),
  }),
  bg: (color) => {
    let out = style.COLORS.BACKGROUND_HARD;
    switch (color) {
      case "white":
        out = style.COLORS.WHITE;
        break;
      case "prime":
        out = style.COLORS.PRIME;
        break;
      case "purble":
        out = style.COLORS.PURPLE;
        break;
      case "blue":
        out = style.COLORS.BLUE;
        break;
      case "orange":
        out = style.COLORS.ORANGE;
        break;
      case "red":
        out = style.COLORS.RED;
        break;
      case "green":
        out = style.COLORS.GREEN;
        break;
      case "black":
        out = style.COLORS.BLACK;
        break;
      case "med":
        out = style.COLORS.BACKGROUND_MED;
        break;
      case "light":
        out = style.COLORS.BACKGROUND_LIGHT;
        break;
      case "fhard":
        out = style.COLORS.FONT_HARD;
        break;
      case "flight":
        out = style.COLORS.FONT_LIGHT;
        break;
      default:
        break;
    }
    return { backgroundColor: out };
  },
  bgmed: () => ({ backgroundColor: style.COLORS.BACKGROUND_MED }),
  bglight: () => ({ colbackgroundColoror: style.COLORS.BACKGROUND_LIGHT }),
  bc: (color) => {
    let out = style.COLORS.FONT_HARD;
    switch (color) {
      case "white":
        out = style.COLORS.WHITE;
        break;
      case "prime":
        out = style.COLORS.PRIME;
        break;
      case "purble":
        out = style.COLORS.PURPLE;
        break;
      case "blue":
        out = style.COLORS.BLUE;
        break;
      case "orange":
        out = style.COLORS.ORANGE;
        break;
      case "red":
        out = style.COLORS.RED;
        break;
      case "green":
        out = style.COLORS.GREEN;
        break;
      case "black":
        out = style.COLORS.BLACK;
        break;
      case "light":
        out = style.COLORS.FONT_LIGHT;
        break;
      case "bg-hard":
        out = style.COLORS.BACKGROUND_HARD;
        break;
      case "bg-med":
        out = style.COLORS.BACKGROUND_MED;
        break;
      case "bg-light":
        out = style.COLORS.BACKGROUND_LIGHT;
        break;
      default:
        break;
    }
    return { borderColor: out };
  },
});
