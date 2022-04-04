import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ theme }) => theme.media.sm`
    height: 20vh
  `}
`

export const Info = styled.div`
  ${({ theme }) => theme.common.flexColumnCenter};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`

export const Button = styled.button`
  all: unset;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.5em 2em;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #000000;
  }
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
