import logo from '~/assets/logo.svg'
import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Image src={logo} />
    </S.Wrapper>
  )
}

export default Header
