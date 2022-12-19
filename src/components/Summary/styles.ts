import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.gray100};
    margin-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
  `}
`
type LabelProps = {
  color?: 'blue' | 'purple'
}

export const Label = styled.label<LabelProps>`
  ${({ theme, color = 'blue' }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xxsmall};
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    & span {
      background-color: ${theme.colors.gray400};
      color: ${theme.colors.gray200};
      border-radius: ${theme.spacings.xsmall};
      padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
    }
  `}
`
