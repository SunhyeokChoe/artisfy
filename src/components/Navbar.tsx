import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from './Navbar.style'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>KO</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: 'white', fontSize: 16, height: '30px', width: '30px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Artisfy</Logo>
        </Center>
        <Right>
          <MenuItem>회원가입</MenuItem>
          <MenuItem>로그인</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
