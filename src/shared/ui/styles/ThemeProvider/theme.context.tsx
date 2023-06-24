"use client";

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

import themes, { lightTheme } from "../theme";
import { TThemeContext, ThemeType } from "./theme.types";

export const ThemeContext = createContext<TThemeContext>({} as TThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [keyTheme, setKeyTheme] = useState<ThemeType>("light");
  const [isMountedComponent, setIsMountedComponent] = useState(false);

  const handleTheme = (mode: ThemeType) => {
    window.localStorage.setItem("theme", mode);
    setTheme(themes[mode]);
    setKeyTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeType;
    localTheme ? handleTheme(localTheme) : handleTheme("light");
    setIsMountedComponent(true);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        keyTheme,
        handleTheme,
        isMountedComponent,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
