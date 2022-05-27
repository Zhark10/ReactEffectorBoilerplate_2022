import {createTheme, responsiveFontSizes, ThemeOptions} from '@mui/material/styles';
import { defaultTheme } from '../default';
import {themeTypography} from "./themeTypography";

export type TThemeId = 0 // 1,2,3,4...
export type TThemes = {
  [key: number]: ThemeOptions
}

export const themeBuilder = (themeId: TThemeId) => {
  const themes: TThemes = {
    0: defaultTheme,
    // YOUR OTHER THEMES ...
  }

  const themeByCurrentThemeId = themes[themeId]
  const createdTheme = createTheme({...themeByCurrentThemeId, ...themeTypography});

  return responsiveFontSizes(createdTheme)
}