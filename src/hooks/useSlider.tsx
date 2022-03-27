import { useState, useCallback } from 'react'

const useSlider = (initialIndex: number, slideArrLength: number): [number, (args: string) => void] => {
  const [slideIndex, setSlideIndex] = useState(initialIndex)
  const slideMaxLength: number = slideArrLength - 1

  const changeSlide = useCallback(
    (direction: string) => {
      if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideMaxLength)
      } else {
        setSlideIndex(slideIndex < slideMaxLength ? slideIndex + 1 : 0)
      }
    },
    [slideIndex, slideMaxLength],
  )

  return [slideIndex, changeSlide]
}

export default useSlider
