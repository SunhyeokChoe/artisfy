import media from './media'

const pixelToRem = (size: number) => `${size / 16}rem`

const palette = {
  black: '#000000',
  gray: '#999999',
  green: '#3cb46e',
  blue: '#000080',
}

const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
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
  palette,
  fontSizes,
  common,
}

export type Theme = typeof theme

export default theme
