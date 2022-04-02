// import device from 'components/styles/media'

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
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
}

const theme = {
  // device,
  palette,
  fontSizes,
  common,
}

export default theme
