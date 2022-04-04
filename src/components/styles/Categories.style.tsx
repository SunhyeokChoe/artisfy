import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${({ theme }) => theme.media.sm`
    padding: 0px;
    flex-direction: column;
  `}
`
