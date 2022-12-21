import * as S from './styles'

export type SummaryProps = {
  done: number
  total: number
}

const Summary = ({ total, done }: SummaryProps) => {
  return (
    <S.Wrapper>
      <S.Label>
        Tarefas criadas <span>{total}</span>
      </S.Label>

      <S.Label color="purple">
        Concluídas
        <span>
          {done} de {total}
        </span>
      </S.Label>
    </S.Wrapper>
  )
}

export default Summary
