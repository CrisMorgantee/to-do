import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    height: 14rem;
    background-color: ${theme.colors.gray700};

    ${media.greaterThan('medium')`
      height: 20rem;
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 12.6rem;
    color: ${theme.colors.gray400};
    margin-bottom: ${theme.spacings.small};
  `}
`
