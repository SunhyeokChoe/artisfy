import React from 'react'
import * as S from './styles/Slide.style'

interface IProps {
  img: string
  title: string
  description: string
  bg: string
}

const Slide: React.FC<IProps> = ({
  img,
  title,
  description,
  bg,
}): JSX.Element => {
  return (
    <S.Container bg={bg}>
      <S.ImgContainer>
        <S.Image src={img} />
      </S.ImgContainer>
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.Desc>{description}</S.Desc>
        <S.Button>제품 보러가기</S.Button>
      </S.InfoContainer>
    </S.Container>
  )
}

export default React.memo(Slide)
