interface IDeviceMediaQuery {
  sm: string
  md: string
  lg: string
  xl: string
}

/**
 * @constant
 */
const deviceSizes: IDeviceMediaQuery = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

/**
 * 명시한 디바이스 크기에 따라 미디어 쿼리 생성 및 전달한 CSS string 파라미터 적용.
 *
 * 사용 예시:
 * ```typescript
 * const Title = styled.h1`
 *  color: black;
 *  ${device.lg`
 *    color: ReactDOM;
 *  `}
 * `
 * ```
 * @param {{
 * sm: string,
 * md: string,
 * lg: string,
 * xl: string
 * }} deviceSizes
 */
const device = (
  Object.keys(deviceSizes) as Array<keyof typeof deviceSizes>
).reduce((acc, key) => {
  acc[key] = (style: TemplateStringsArray) =>
    `@media (min-width: ${deviceSizes[key]}) { ${style} }`

  return acc
}, {} as { [index: string]: (srt: TemplateStringsArray) => string })

export default device
