import styled, { css } from 'styled-components'
import * as ButtonStyles from '~/components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.gray500};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};

    & + main {
      margin-top: ${theme.spacings.xsmall};
    }

    /* ${ButtonStyles.Wrapper} {} */
  `}
`

type TitleProps = {
  isChecked?: boolean
}

export const Title = styled.h3<TitleProps>`
  ${({ theme, isChecked }) => css`
    flex: 1;
    color: ${isChecked ? theme.colors.gray300 : theme.colors.gray100};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    padding: 0 ${theme.spacings.xsmall};
    line-height: 140%;

    text-decoration-line: ${isChecked ? 'line-through' : 'none'};
  `}
`

export const Checkbox = styled.input`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxxsmall};
    appearance: none;
    outline: none;
    border: 0.2rem solid ${theme.colors.blue};
    position: relative;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.2rem ${theme.colors.blueDark};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0.1rem;
      width: 0.5rem;
      height: 0.8rem;
      border: 0.2rem solid ${theme.colors.gray100};
      border-left: 0;
      border-top: 0;
      opacity: 0;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
    }

    &:checked {
      border-color: ${theme.colors.purpleDark};
      background: ${theme.colors.purpleDark};

      &:before {
        opacity: 1;
      }
    }
  `}
`
