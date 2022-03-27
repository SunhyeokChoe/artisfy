import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import { sliderItems, ISliderItems } from 'constants/fake/data'
import useSlider from 'hooks/useSlider'
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
  const [slideIndex, changeSlide] = useSlider(
    0,
    sliderItems.length /* FIXME: 서버로부터 전달받은 slide 배열의 length 전달 */,
  )

  return (
    <Container>
      <Arrow direction="left" onClick={() => changeSlide('left')}>
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
      <Arrow direction="right" onClick={() => changeSlide('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
