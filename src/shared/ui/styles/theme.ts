const colors = {
  primary: "#00B1E1",
  darkPrimary: "#154C7A",
  white: "#FFFFFF",
  error: "#eb3d2f",
  navyBlue: "#007AB3",
  textPrimary: "#515A62",
  backgrounds: {
    primary: "#FAFCFF",
    secondary: "#EFF7FF",
    thirdParty: "#707070",
  },
};

const general = {
  fontSize: {
    "2x": "30px",
    "1x": "20px",
    lg: "18px",
    md: "16px",
    sm: "14px",
    xs: "12px",
    smaller: "8px",
  },
  text: {
    primary: colors.textPrimary,
    secondary: "#006192",
  },
  input: {
    boxShadow: "inset 0px 1px 8px #7993FF29",
    background: colors.backgrounds.secondary,
    textLabel: colors.primary,
    textSolid: "#4C7093",
  },
  button: {
    boxShadow: "0px 3px 6px #aaafe329",
    primary: colors.primary,
    background: colors.primary,
    textSolid: colors.white,
  },
  colors,
};

export const lightTheme = general;

const themes = {
  light: lightTheme,
};

export default themes;
