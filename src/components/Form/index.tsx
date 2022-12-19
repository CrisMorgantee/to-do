import { AddCircleOutline as ButtonIcon } from '@styled-icons/material-outlined'
import Button from '../Button'
import * as S from './styles'

const Form = () => {
  return (
    <S.Wrapper>
      <S.Input placeholder="Adicione uma nova tarefa" />
      <Button icon={<ButtonIcon />}>Criar</Button>
    </S.Wrapper>
  )
}

export default Form
