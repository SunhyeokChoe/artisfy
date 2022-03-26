import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`

const Left = styled.div`
  flex: 1;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div``

const Center = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
`

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>input icon</SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
