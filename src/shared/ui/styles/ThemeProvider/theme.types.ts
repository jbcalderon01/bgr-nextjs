import { DefaultTheme } from "styled-components";

export type ThemeType = "light";

export type TThemeContext = {
  theme: DefaultTheme;
  handleTheme: (mode: ThemeType) => void;
  isMountedComponent: boolean;
  keyTheme: ThemeType;
};
