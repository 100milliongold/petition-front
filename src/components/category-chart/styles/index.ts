import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const BarChartCanvas = styled.canvas`
  height: 300px;
  width: 100%;
`
