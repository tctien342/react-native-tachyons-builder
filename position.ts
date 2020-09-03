export const PositionBuilder: StringBuilder = (style: AppStyles) => ({
  top: (offset) => ({
    top: offset,
  }),
  left: (offset) => ({
    left: offset,
  }),
  right: (offset) => ({
    right: offset,
  }),
  bottom: (offset) => ({
    bottom: offset,
  }),
  z: (index) => ({
    zIndex: index,
  }),
  pa: (size) => ({
    padding: size,
  }),
  pt: (size) => ({
    paddingTop: size,
  }),
  pr: (size) => ({
    paddingRight: size,
  }),
  pb: (size) => ({
    paddingBottom: size,
  }),
  pl: (size) => ({
    paddingLeft: size,
  }),
  ma: (size) => ({
    margin: size,
  }),
  mt: (size) => ({
    marginTop: size,
  }),
  mr: (size) => ({
    marginRight: size,
  }),
  mb: (size) => ({
    marginBottom: size,
  }),
  ml: (size) => ({
    marginLeft: size,
  }),
});
