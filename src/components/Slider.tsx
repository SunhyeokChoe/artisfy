import React from 'react'
import img from 'assets/images/sample.png'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'

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
  const handleClick = (direction: string) => {
    console.log(direction)
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide bg="19227c">
          <ImgContainer>
            <Image src={img} />
          </ImgContainer>
          <InfoContainer>
            <Title>여름 세일</Title>
            <Desc>스타일을 완성하는데 머뭇거리지 마세요! 신상을 30% 세일 가격으로 판매합니다.</Desc>
            <Button>제품 보러가기</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="19227c">
          <ImgContainer>
            <Image src={img} />
          </ImgContainer>
          <InfoContainer>
            <Title>겨울 세일</Title>
            <Desc>스타일을 완성하는데 머뭇거리지 마세요! 신상을 30% 세일 가격으로 판매합니다.</Desc>
            <Button>제품 보러가기</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="19227c">
          <ImgContainer>
            <Image src={img} />
          </ImgContainer>
          <InfoContainer>
            <Title>인기제품 세일</Title>
            <Desc>스타일을 완성하는데 머뭇거리지 마세요! 신상을 30% 세일 가격으로 판매합니다.</Desc>
            <Button>제품 보러가기</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
