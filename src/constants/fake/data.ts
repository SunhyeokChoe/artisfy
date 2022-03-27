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

export interface ICategoryItems {
  id: number
  img: string
  title: string
}

export const categoryItems = [
  {
    id: 1,
    img,
    titme: '후드 집업',
  },
  {
    id: 2,
    img,
    titme: '트레이닝/조거 팬츠',
  },
  {
    id: 3,
    img,
    titme: '데님 팬츠',
  },
  {
    id: 4,
    img,
    titme: '맨투맨/스웨트셔츠',
  },
  {
    id: 5,
    img,
    titme: '블루종/MA-1',
  },
  {
    id: 6,
    img,
    titme: '슈트/블레이저 재킷',
  },
  {
    id: 7,
    img,
    titme: '카디건',
  },
  {
    id: 8,
    img,
    titme: '로퍼',
  },
  {
    id: 9,
    img,
    titme: '메신저/크로스 백',
  },
  {
    id: 10,
    img,
    titme: '향수/탈취',
  },
]
