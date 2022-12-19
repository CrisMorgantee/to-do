import { lighten } from 'polished'
import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<ButtonProps, 'onlyIcon'>

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    svg {
      width: 1.8rem;
    }
  `,

  onlyIcon: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.gray300};
    height: max-content;
    padding: ${theme.spacings.xxxsmall};
    transition: all ${theme.transition.fast};

    &:hover {
      color: ${theme.colors.danger};
      background: ${theme.colors.gray400};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, onlyIcon, disabled }) => css`
    color: inherit;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.blueDark};
    outline: none;
    border: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    transition: background ${theme.transition.fast};

    &:hover {
      background-color: ${lighten(0.1, theme.colors.blueDark)};
    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!onlyIcon && wrapperModifiers.onlyIcon(theme)}
    ${!!disabled && wrapperModifiers.disabled()};
  `}
`
