import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import { sliderItems, ISliderItems } from 'constants/fake/data'
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  InfoContainer,
  Image,
  Title,
  Desc,
  Button,
} from './Slider.style'

const Slider: React.FC = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction: string) => {
    // FIXME: 전달받은 배열의 마지막 요소 인덱스 추가
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item: ISliderItems) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.description}</Desc>
              <Button>제품 보러가기</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
