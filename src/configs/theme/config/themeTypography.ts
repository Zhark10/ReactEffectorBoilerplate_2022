import {Palette} from "@mui/material/styles";
import {TypographyOptions} from "@mui/material/styles/createTypography";

export const themeTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontSize: 16,
  fontFamily: 'Rubik',
  h3: {
    fontWeight: 600,
    fontSize: '2.2rem',
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.75rem'
  },
  h5: {
    fontWeight: 500
  },
  h6: {
    fontWeight: 500
  }
}