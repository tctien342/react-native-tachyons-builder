import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import { useDarkMode } from "react-native-dynamic";

import { PositionBuilder } from "./position";
import { TextBuilder } from "./text";
import { SizeBuilder } from "./size";
import { UtilsBuilder } from "./utils";
import { ColorBuilder } from "./color";
import { BorderBuilder } from "./border";
import { DarkStyle, LightStyle } from "./config";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const styleBuilders = [
  BorderBuilder,
  PositionBuilder,
  TextBuilder,
  SizeBuilder,
  UtilsBuilder,
  ColorBuilder,
];
const isOnlyDigit = /^\d+$/;

/**
 * Cached builded styles for not build it each time call again with same build string
 */
let cacheBuilder: {
  [key: string]: {
    dark?: { [key: string]: string | number };
    light?: { [key: string]: string | number };
  };
} = {};

export const s = (style: AppStyles) => {
  let dark = useDarkMode() ? "dark" : "light";
  /**
   * Convert tachyons synax string to react native style
   * @param styleString String of multi prefix tachyons syntax
   * @example
   * // Note: `vw` and `vh` or anything relate to view size will calculated as percent of phone's screen
   * s(`vw-100 vh-100`) as {height: vh(100), width: vw(100)}
   * s(`w-100 h-100`) as {height: 100, width: 100}
   * s(`w-100% h-100%`) as {height: '100%', width: '100%'}
   * s(`bg`) as {background: style.COLOR.BACKGROUND_HARD}
   * s(`red`) as {color: style.COLOR.RED}
   * s(`relative`) as {position: 'relative'}
   * s(`f1 prime bold`) as {fontSize: style.FONT.SIZE.xl, color: style.COLORS.PRIME, fontWeight: style.FONT.WEIGHT.bold}
   */
  const prebuilt = (styleString: string) => {
    // Checking if style have already cached
    if (cacheBuilder[styleString]?.[dark]) {
      return cacheBuilder[styleString][dark];
    }
    // Compute string to style object
    let styles = {};
    let parts = styleString.split(" ");
    for (let part of parts) {
      let input: (string | number)[];
      let prefix: string;
      if (part.includes("--")) {
        // Pass through value => no need to be split
        prefix = part;
        input = [];
      } else {
        // Get value after '-'
        let parts = part.split("-");
        prefix = parts.shift() || "";
        if (parts.length > 0 && isOnlyDigit.test(parts[0])) {
          // If only digit => convert to percent
          input = [parseInt(parts[0], 10)];
          if (parts[1]) {
            input.push(parts[1]);
          }
        } else {
          // Is an string ==> pass value
          input = [parts[0]];
        }
      }
      for (let builder of styleBuilders) {
        let out = builder(style)[prefix]?.(...input);
        if (out) {
          styles = { ...styles, ...out };
        }
      }
    }
    if (!cacheBuilder[styleString]) {
      cacheBuilder[styleString] = {};
    }
    cacheBuilder[styleString][dark] = styles;
    return styles as StyleProp<{}>;
  };
  return prebuilt;
};

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
/**
 * Normalize an size base on differnt size of screens
 * @param size Size that need to be normalize
 */
export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

/**
 * Return width base on phone screen
 * @param percent 0-100 percent of view width
 */
export function vw(percent: number) {
  return Math.round((SCREEN_WIDTH * percent) / 100);
}
/**
 * Return height base on phone screen
 * @param percent 0-100 percent of view height
 */
export function vh(percent: number) {
  return Math.round((SCREEN_HEIGHT * percent) / 100);
}

/**
 * Get style base on current phone dark mode status
 */
export const useDynamicStyle = () => {
  const isDarkMode = useDarkMode();
  return isDarkMode ? DarkStyle : LightStyle;
};

/**
 * Make and style builder using hook
 */
export function useStyleBuilder() {
  let style = useDynamicStyle();
  return s(style);
}
