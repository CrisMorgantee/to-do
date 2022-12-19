import { lighten } from 'polished'
import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<ButtonProps, 'onlyIcon'>

const wrapperModifiers = {
  withIcon: () => css`
    svg {
      width: 1.8rem;
    }
  `,

  onlyIcon: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.gray300};
    height: max-content;
    padding: ${theme.spacings.xxsmall};
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${theme.colors.danger};
      background-color: ${theme.colors.gray400};
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
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.blueDark};
    outline: none;
    border: none;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    transition: background ${theme.transition.fast};

    &:hover {
      background-color: ${lighten(0.1, theme.colors.blueDark)};
    }

    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!onlyIcon && wrapperModifiers.onlyIcon(theme)}
    ${!!disabled && wrapperModifiers.disabled()};
  `}
`
