import styled, { createGlobalStyle } from 'styled-components'
import device from './media'

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

export const Test = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  ${device.md`
    color: black;
    padding: 0 2em 0 1em;
  `};
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.common.flexCenterColumn};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.grey};
`

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.green};
`

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.Paragraph};
  color: ${({ theme }) => theme.colors.blue};
`

export const Button = styled.button<{
  primary: string
  big: string
  fontBig: string
}>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
