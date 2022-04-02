import React from 'react'
import styled from 'styled-components'

import device from './styles/media'

// import * as GS from './styles/GlobalStyle'
import * as S from './styles/CategoryItem.style'

interface IProps {
  id?: number
  img: string
  title: string
}

const Test = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  ${device.sm`
    color: black;
    padding: 0 2em 0 1em;
  `};
`

const CategoryItem: React.FC<IProps> = ({ img, title }): JSX.Element => {
  return (
    <S.Container>
      <Test>TEST</Test>
      <S.Image src={img} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Button>구매하기</S.Button>
      </S.Info>
    </S.Container>
  )
}

export default CategoryItem
