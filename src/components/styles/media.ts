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
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
}

/**
 * 명시한 디바이스 크기에 따라 미디어 쿼리 동적 생성 및 CSS string 파라미터 적용.
 *
 * 사용 예시:
 * ```typescript
 * const Title = styled.h1`
 *  color: black;
 *  ${({ theme }) => theme.media.lg`
 *    color: blue;
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
export default (
  Object.keys(deviceSizes) as Array<keyof IDeviceMediaQuery>
).reduce((acc, key) => {
  acc[key] = (style: TemplateStringsArray) =>
    `@media (max-width: ${deviceSizes[key]}) { ${style} }`

  return acc
}, {} as { [index: string]: (srt: TemplateStringsArray) => string })
