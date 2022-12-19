import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    width: 100%;
    height: 5.4rem;
    transform: translateY(-50%);
    color: ${theme.colors.gray100};
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    color: inherit;
    background-color: ${theme.colors.gray500};
    border-radius: ${theme.border.radius};
    border: hidden;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.small};
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray300};
    }

    &:focus {
      border: thin solid ${theme.colors.purpleDark};
    }
  `}
`

type ButtonProps = {
  icon?: JSX.Element
}

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => css`
    color: inherit;
    display: flex;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.blueDark};
    outline: none;
    border: none;
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};

    svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
