import * as S from './styles'

export type SummaryProps = {
  total: number
}

const Summary = ({ total }: SummaryProps) => {
  return (
    <S.Wrapper>
      <S.Label>
        Tarefas criadas <span>{total}</span>
      </S.Label>

      <S.Label color="purple">
        Concluídas
        <span>
          {total} de {total}
        </span>
      </S.Label>
    </S.Wrapper>
  )
}

export default Summary
