import img from 'assets/images/sample.png'

export interface ISliderItems {
  id: number
  img: string
  title: string
  description: string
  bg: string
}

export const sliderItems = [
  {
    id: 1,
    img,
    title: '여름 세일',
    description: '스타일을 완성하는데 머뭇거리지 마세요! 신상을 30% 세일 가격으로 판매합니다.',
    bg: '#19227c',
  },
  {
    id: 2,
    img,
    title: '겨울 세일',
    description: '스타일을 완성하는데 머뭇거리지 마세요! 신상을 30% 세일 가격으로 판매합니다.',
    bg: '#19227c',
  },
  {
    id: 3,
    img,
    title: '인기상품 세일',
    description: '스타일을 완성하는데 머뭇거리지 마세요! 신상을 30% 세일 가격으로 판매합니다.',
    bg: '#19227c',
  },
]
