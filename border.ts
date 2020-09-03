import { vh, vw } from "./";

export const BorderBuilder: StringBuilder = (style: AppStyles) => ({
  ba: () => ({
    borderStyle: "solid",
  }),
  bdot: () => ({
    borderStyle: "dotted",
  }),
  bdash: () => ({
    borderStyle: "dashed",
  }),
  bw: (width) => ({
    borderWidth: width,
  }),
  br: (radius) => ({
    borderRadius: radius || parseInt(style.BORDER.BR_INPUT_RADIUS, 10),
  }),
  "br--btn": () => ({
    borderRadius: parseInt(style.BORDER.BR_BTN_RADIUS, 10),
  }),
  "br--pill": () => ({
    borderRadius: parseInt(style.BORDER.BR_PILL, 10),
  }),
  "br--bottom": () => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),
  "br--top": () => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),
  "br--right": () => ({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }),
  "br--left": () => ({
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  }),
});
