import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import { sliderItems } from 'constants/fake/data'
import useSlider from 'hooks/useSlider'
import Slide from 'components/Slide'
import * as S from 'components/styles/Slider.style'

const Slider: React.FC = (): JSX.Element => {
  const [slideIndex, nextSlide, prevSlide] = useSlider(
    0,
    sliderItems.length /* FIXME: 서버로부터 전달받은 slide 배열의 length 전달 */,
  )

  return (
    <S.Container>
      <S.Arrow direction="left" onClick={prevSlide}>
        <ArrowLeftOutlinedIcon style={{ color: 'white' }} />
      </S.Arrow>
      <S.Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            bg={item.bg}
          />
        ))}
      </S.Wrapper>
      <S.Arrow direction="right" onClick={nextSlide}>
        <ArrowRightOutlinedIcon style={{ color: 'white' }} />
      </S.Arrow>
    </S.Container>
  )
}

export default Slider
