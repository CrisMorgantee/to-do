import { DeleteForever } from '@styled-icons/material-outlined'
import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'

export type TaskProps = {
  title: string
  isChecked?: boolean
}

const Task = ({ title, isChecked = false }: TaskProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)
  }

  return (
    <S.Wrapper>
      <S.Checkbox type="checkbox" onChange={onChange} checked={checked} />

      <S.Title isChecked={checked}>{title}</S.Title>

      <Button onlyIcon icon={<DeleteForever />} />
    </S.Wrapper>
  )
}

export default Task
