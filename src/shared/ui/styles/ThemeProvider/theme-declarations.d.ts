import "styled-components";
import { lightTheme } from "../theme";

export type ThemeInterface = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
