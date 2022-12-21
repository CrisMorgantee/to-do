import { DeleteForever } from '@styled-icons/material-outlined'
import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'

export type TaskProps = {
  title: string
  isChecked?: boolean
  setTasks?: React.Dispatch<React.SetStateAction<TaskProps[]>>
  tasks?: TaskProps[]
}

const Task = ({ title, isChecked = false, setTasks, tasks }: TaskProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    const task = tasks?.filter((task) => task.title == title)
    task?.map((task) => (task.isChecked = status))
    setTasks!([...tasks!])
    localStorage.setItem('tasks', JSON.stringify([...tasks!]))
  }

  const handleDelete = (title: string) => {
    const task = tasks?.findIndex((i) => i.title === title)

    if (task! > -1) {
      tasks?.splice(task!, 1)
    }

    setTasks!([...tasks!])
    localStorage.setItem('tasks', JSON.stringify([...tasks!]))
  }

  return (
    <S.Wrapper>
      <S.Checkbox type="checkbox" onChange={onChange} checked={checked} />

      <S.Title isChecked={checked}>{title}</S.Title>

      <Button
        onlyIcon
        icon={<DeleteForever />}
        onClick={() => handleDelete(title)}
      />
    </S.Wrapper>
  )
}

export default Task
