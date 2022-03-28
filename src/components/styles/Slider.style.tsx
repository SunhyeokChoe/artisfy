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
