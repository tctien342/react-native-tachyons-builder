export const UtilsBuilder: StringBuilder = (style: AppStyles) => ({
  absolute: () => ({
    position: "absolute",
  }),
  relative: () => ({
    position: "relative",
  }),
  centeritems: () => ({
    justifyContent: "center",
    alignItems: "center",
  }),
  justifycenter: () => ({ justifyContent: "center" }),
  itemscenter: () => ({ alignItems: "center" }),
  row: () => ({
    flexDirection: "row",
  }),
  column: () => ({
    flexDirection: "column",
  }),
  shadow: (depth = 16, color: "#000") => ({
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: (typeof depth === "number" ? depth : parseInt(depth, 10)) / 2,
    elevation: 5,
  }),
});
