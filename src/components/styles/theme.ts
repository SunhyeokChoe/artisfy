import media from './media'

const palette = {
  black: '#000000',
  gray: '#999999',
  green: '#3cb46e',
  blue: '#000080',
  white: '#FFFFFF',
}

const lightThemePalette = {
  ...palette,
  primary: '#333',
  secondary: '#fff',
  tertiary: '#808080',
}

const darkThemePalette = {
  ...palette,
  primary: '#fff',
  secondary: '#333',
  tertiary: '#d4d0c4',
}

const margin = {
  sm: '.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '3rem',
}

const padding = {
  sm: '.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '3rem',
}

const font = {
  // family: {  }
  size: {
    sm: '1.4rem',
    md: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
}

const common = {
  flexRowCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
}

const theme = {
  media,
  margin,
  padding,
  font,
  common,
}

export const lightTheme = {
  ...theme,
  colors: lightThemePalette,
}

export const darkTheme = {
  ...theme,
  colors: darkThemePalette,
}

export type Theme = typeof theme

export default theme
