import { useState, useCallback } from 'react'

const useSlider = (
  initialIndex: number,
  slideArrLength: number,
): [number, () => void, () => void] => {
  const [currSlideIdx, setCurrSlideIdx] = useState(initialIndex)
  const lastSlideIdx = slideArrLength - 1

  const nextSlide = useCallback(
    () =>
      currSlideIdx > lastSlideIdx
        ? setCurrSlideIdx(0)
        : setCurrSlideIdx((prev) => prev + 1),
    [currSlideIdx, lastSlideIdx],
  )

  const prevSlide = useCallback(
    () =>
      currSlideIdx > lastSlideIdx
        ? setCurrSlideIdx(0)
        : setCurrSlideIdx((prev) => prev + 1),
    [currSlideIdx, lastSlideIdx],
  )

  return [currSlideIdx, nextSlide, prevSlide]
}

export default useSlider
