import React from 'react'

import { categoryItems } from 'constants/fake/data'
import CategoryItem from 'components/CategoryItem'
import * as S from 'components/styles/Categories.style'

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
