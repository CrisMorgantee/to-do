import { AddCircleOutline as ButtonIcon } from '@styled-icons/material-outlined'
import { useState } from 'react'
import Button from '../Button'
import { TaskProps } from '../Task'
import * as S from './styles'

type FormProps = {
  initialValue?: string
  setTasks?: React.Dispatch<React.SetStateAction<TaskProps[]>>
  tasks?: TaskProps[] | undefined
}

const Form = ({ tasks, setTasks, initialValue = '' }: FormProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const task = { title: value }

    setTasks!([...tasks!, task])
    localStorage.setItem('tasks', JSON.stringify([...tasks!, task]))
    setValue('')
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Input
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={onChange}
        value={value}
      />
      <Button type="submit" icon={<ButtonIcon />}>
        Criar
      </Button>
    </S.Wrapper>
  )
}

export default Form
