import clipboard from '~/assets/clipboard.svg'
import * as S from './styles'

const Empty = () => {
  return (
    <S.Wrapper>
      <S.Image src={clipboard} />

      <S.Text>
        <span>Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer
      </S.Text>
    </S.Wrapper>
  )
}

export default Empty
