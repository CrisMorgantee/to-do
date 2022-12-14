import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    padding: ${theme.spacings.xxlarge} 0;
    border-top: 1px solid ${theme.colors.gray400};
    border-radius: ${theme.border.radius};
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 5.6rem;
    color: ${theme.colors.gray400};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    line-height: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};

    & span {
      font-weight: bold;
      display: block;
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`
