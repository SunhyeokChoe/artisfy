import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`

export const Wrapper = styled.div<{ slideIndex: number }>`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`

export const Slide = styled.div<{ bg: string }>`
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
  cursor-pointer: pointer;
`

export const Image = styled.img<{ src: string; alt?: string }>`
  width: 100%;
  height: 80%;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt ?? 'clothes'};
`

export const Arrow = styled.div<{ direction: string }>`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #00685b;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '25px'};
  right: ${(props) => props.direction === 'right' && '25px'};
`
