import React from 'react'
import { Search } from '@material-ui/icons'
import { Container, Wrapper, Left, Right, Center, Language, SearchContainer, Input, Logo } from './Navbar.style'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input /> <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Artisfy</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
