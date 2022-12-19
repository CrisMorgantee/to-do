import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  icon?: JSX.Element
  onlyIcon?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  onlyIcon = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper hasIcon={!!icon} onlyIcon={onlyIcon} {...props}>
      {!!children && <span>{children}</span>}
      {!!icon && icon}
    </S.Wrapper>
  )
}

export default Button
