import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 100%;
  background-color: #000000;
  color: white;
`

export const Left = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;

  display: flex;
  align-items: center;
  margin-left: 25px;
  border-color: #212121;
  height: 30px;
`

export const Input = styled.input`
  border: none;
  height: 100%;
`

export const Center = styled.div`
  flex: 1;

  text-align: center;
`

export const Logo = styled.h1`
  font-weight: bold;
`

export const Right = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
