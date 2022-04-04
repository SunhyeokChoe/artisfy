import React from 'react'

import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

import * as S from 'components/styles/Newsletter.style'

const Newsletter: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>
      <S.Desc>관심있으신 상품의 신상 정보를 실시간으로 받아보세요! 👇</S.Desc>
      <S.InputContainer>
        <S.Input placeholder="이메일 주소" />
        <S.Button>
          <SendOutlinedIcon />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  )
}

export default Newsletter
