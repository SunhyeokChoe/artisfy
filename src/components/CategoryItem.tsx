import React from 'react'

import * as S from './styles/CategoryItem.style'

interface IProps {
  id?: number
  img: string
  title: string
}

const CategoryItem: React.FC<IProps> = ({ img, title }): JSX.Element => {
  return (
    <S.Container>
      <S.Image src={img} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Button>구매하기</S.Button>
      </S.Info>
    </S.Container>
  )
}

export default CategoryItem
