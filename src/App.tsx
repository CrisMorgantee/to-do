import { useState } from 'react'
import { Container } from './components/Container'
import Empty from './components/Empty'
import Form from './components/Form'
import Header from './components/Header'
import Task, { TaskProps } from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      title:
        'Terminar o desafio 01 do curso da rocketseat, ignite trilha React',
    },
    {
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat dolore ut aperiam autem aspernatur nisi laudantium explicabo, exercitationem inventore quidem, fugit quod magni labore et debitis, neque fugiat odio!',
    },
  ])

  return (
    <>
      <Header />
      <Container>
        <Form />
        {tasks.length == 0 ? (
          <Empty />
        ) : (
          tasks.map(({ title }) => <Task key={title} title={title} />)
        )}
      </Container>
    </>
  )
}

export default App
