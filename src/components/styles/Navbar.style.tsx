import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  ${({ theme }) => theme.media.sm`
    height: 50px;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  ${({ theme }) => theme.media.sm`
    padding: 10px 0px;
  `}
`

export const Left = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${({ theme }) => theme.media.sm`
    display: none;
  `}
`

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;

  display: flex;
  align-items: center;
  margin-left: 25px;
  border-color: #212121;
`

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 32px;

  ${({ theme }) => theme.media.sm`
    display: none;
  `}
`

export const Center = styled.div`
  flex: 1;

  text-align: center;
`

export const Logo = styled.h1`
  font-weight: bold;
  ${({ theme }) => theme.media.sm`
    font-size: 24px;
  `}
`

export const Right = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  ${({ theme }) => theme.media.sm`
    flex: 2;
    justify-content: center;
  `}
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${({ theme }) => theme.media.sm`
    font-size: 8px;
    margin-left: 10px;
  `}
`
