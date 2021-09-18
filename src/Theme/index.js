const colors = {
  red: "#DB2053",
  blue: "#3CBBEC",
  green: "#23AF74",
  yellow: "#E4AE31",
  orange: "#DF5341",
  purple: "#862D8D",
  black: "#000000",
  white: "#FFFFFF",
  grey: "#D9DADC",
  darkgrey: "#C4C4C4",
  lightgrey: "#F0F1F6",
};

const pinColors = {
  red: colors.red,
  blue: colors.blue,
  green: colors.green,
  yellow: colors.yellow,
  orange: colors.orange,
  purple: colors.purple,
  black: colors.black,
  empty: colors.lightgrey,
};

const size = {
  phone: "320px",
  tablet: "768px",
  desktop: "2560px",
};

const devices = {
  phone: `(max-width: ${size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

const toRGBA = (hex, opacity) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(
        ${parseInt(result[1], 16)},
        ${parseInt(result[2], 16)},
        ${parseInt(result[3], 16)},
        ${opacity})`
    : "";
};

const theme = {
  colors,
  pinColors,
  devices,
  toRGBA,
};

export default theme;