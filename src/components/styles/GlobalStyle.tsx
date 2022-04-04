import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    font-family: 'Urbanist', sans-serif;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.common.flexColumnCenter};
`

// export const Title = styled.h1`
//   font-size: ${({ theme }) => theme.fontSizes.title};
//   color: ${({ theme }) => theme.palette.gray};
// `

// export const Subtitle = styled.h2`
//   font-size: ${({ theme }) => theme.fontSizes.subtitle};
//   color: ${({ theme }) => theme.palette.green};
// `

// export const Paragraph = styled.p`
//   font-size: ${({ theme }) => theme.fontSizes.paragraph};
//   color: ${({ theme }) => theme.palette.blue};
// `

// export const Button = styled.button`
//   all: unset;
//   border: 1px solid ${({ theme }) => theme.palette.black};
//   padding: 0.5em 2em;
//   &:hover {
//     transition: all 0.3s ease-in-out;
//     background-color: ${({ theme }) => theme.palette.black};
//     color: #ffffff;
//   }
//   font-size: 20px;
//   background-color: transparent;
//   cursor-pointer: pointer;
// `

// export const Button = styled.button<{
//   primary: string
//   big: string
//   fontBig: string
// }>`
//   border-radius: 4px;
//   background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
//   color: #fff;
//   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
//   }
//   @media screen and (max-width: 960px) {
//     width: 100%;
//   }
// `
