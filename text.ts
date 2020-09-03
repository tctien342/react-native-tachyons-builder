export const TextBuilder: StringBuilder = (style: AppStyles) => ({
  tc: () => ({
    textAlign: "center",
  }),
  tf: () => ({
    textAlign: "left",
  }),
  tr: () => ({
    textAlign: "right",
  }),
  f1: () => ({
    fontSize: style.FONT.SIZE.xl,
  }),
  f2: () => ({
    fontSize: style.FONT.SIZE.l,
  }),
  f3: () => ({
    fontSize: style.FONT.SIZE.m,
  }),
  f4: () => ({
    fontSize: style.FONT.SIZE.s,
  }),
  f5: () => ({
    fontSize: style.FONT.SIZE.xs,
  }),
  thin: () => ({
    fontWeight: style.FONT.WEIGHT.thin.toString(),
  }),
  bold: () => ({
    fontWeight: style.FONT.WEIGHT.bold.toString(),
  }),
});
