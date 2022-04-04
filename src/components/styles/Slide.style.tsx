import styled from 'styled-components'

export const Container = styled.div<{ bg: string }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${(props) => props.bg};
`

export const ImgContainer = styled.div`
  flex: 1;

  height: 100%;
`

export const Image = styled.img<{ src: string; alt?: string }>`
  height: 80%;

  src: ${(props) => props.src};
  alt: ${(props) => props.alt ?? 'clothes'};
`

export const InfoContainer = styled.div`
  flex: 1;

  padding: 50px;
`

export const Title = styled.h1`
  font-size: 70px;
`

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

export const Button = styled.button`
  all: unset;
  border: 1px solid #000000;
  padding: 0.5em 2em;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #000000;
    color: #ffffff;
  }
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
