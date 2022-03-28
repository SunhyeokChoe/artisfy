import React from 'react'

import { categoryItems } from 'constants/fake/data'
import CategoryItem from './CategoryItem'
import * as S from './styles/Categories.style'

const Categories: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      {categoryItems.map((item) => (
        <CategoryItem key={item.id} img={item.img} title={item.title} />
      ))}
    </S.Container>
  )
}

export default Categories
