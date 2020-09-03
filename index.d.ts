type StringBuilder = (
  style: AppStyles
) => { [key: string]: (...args) => { [key: string]: any } };

/**
 * Style configuration for app
 */
declare interface ColorStyle {
  /**
   * App primary color
   */
  PRIME: string;
  PURPLE: string;
  BLUE: string;
  RED: string;
  ORANGE: string;
  GREEN: string;
  WHITE: string;
  BLACK: string;
  GRAY: string;
  /**
   * App font color (not nessesary)
   */
  FONT_LIGHT: string;
  /**
   * App font color (important value)
   */
  FONT_HARD: string;
  /**
   * App background L2
   */
  BACKGROUND_LIGHT: string;
  /**
   * App background L1
   */
  BACKGROUND_MED: string;
  /**
   * App background L0 (default)
   */
  BACKGROUND_HARD: string;
}

declare interface FontStyle {
  /**
   * Font weight
   */
  WEIGHT: { thin: number; bold: number };
  /**
   * Sizes of font
   */
  SIZE: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl?: number;
  };
}

declare interface AppStyles {
  /**
   * App colors
   */
  COLORS: ColorStyle;
  /**
   * App font settings
   */
  FONT: FontStyle;
  /**
   * Border redius default in app
   */
  BORDER: {
    BR_INPUT_RADIUS: string;
    BR_BTN_RADIUS: string;
    BR_PILL: string;
  };
}
