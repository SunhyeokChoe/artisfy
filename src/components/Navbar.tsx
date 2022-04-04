import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import * as S from 'components/styles/Navbar.style'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Language>KO</S.Language>
          <S.SearchContainer>
            <S.Input />
            <SearchIcon
              style={{
                color: 'white',
                fontSize: 16,
                height: '30px',
                width: '30px',
              }}
            />
          </S.SearchContainer>
        </S.Left>
        <S.Center>
          <S.Logo>Artisfy</S.Logo>
        </S.Center>
        <S.Right>
          <S.MenuItem>회원가입</S.MenuItem>
          <S.MenuItem>로그인</S.MenuItem>
          <S.MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
