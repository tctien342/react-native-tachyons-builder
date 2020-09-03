import { vh, vw } from "./";
import { MIN_DIMENSION } from "./config";

export const SizeBuilder: StringBuilder = (style: AppStyles) => ({
  vh: (percent) => ({
    height: vh(typeof percent === "number" ? percent : parseInt(percent, 10)),
  }),
  h: (value) => ({
    height: value,
  }),
  vw: (percent) => ({
    width: vw(typeof percent === "number" ? percent : parseInt(percent, 10)),
  }),
  w: (value) => ({
    width: value,
  }),
  mvh: (percent) => ({
    maxHeight: vh(
      typeof percent === "number" ? percent : parseInt(percent, 10)
    ),
  }),
  mh: (value) => ({
    maxHeight: value,
  }),
  mvw: (percent) => ({
    maxWidth: vw(typeof percent === "number" ? percent : parseInt(percent, 10)),
  }),
  mw: (value) => ({
    maxWidth: value,
  }),
  flex: (size = 1) => ({
    flex: typeof size === "number" ? size : parseInt(size, 10),
  }),
  wh: (size) => {
    let input = 0;
    if (typeof size === "string") {
      input = parseInt(size, 10);
      if (size.includes("min")) {
        input = Math.round((input * MIN_DIMENSION) / 100);
      }
    } else {
      input = size;
    }
    return {
      width: input,
      height: input,
    };
  },
});
