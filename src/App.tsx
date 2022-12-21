import { useEffect, useState } from 'react'
import { Container } from './components/Container'
import Empty from './components/Empty'
import Form from './components/Form'
import Header from './components/Header'
import Summary from './components/Summary'
import Task, { TaskProps } from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [doneAmount, setDoneAmount] = useState(0)

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    console.log('tasks: ', tasks)

    if (tasks === null) return

    setTasks(JSON.parse(tasks))
  }, [])

  useEffect(() => {
    const done = tasks.reduce((acc, task) => {
      task.isChecked == true ? acc++ : acc

      return acc
    }, 0)

    setDoneAmount(done)
  }, [tasks])

  return (
    <>
      <Header />
      <Container>
        <Form setTasks={setTasks} tasks={tasks} />
        <Summary total={tasks.length} done={doneAmount} />
        {tasks.length == 0 ? (
          <Empty />
        ) : (
          tasks.map(({ title, isChecked }) => (
            <Task
              key={title}
              title={title}
              isChecked={isChecked}
              setTasks={setTasks}
              tasks={tasks}
            />
          ))
        )}
      </Container>
    </>
  )
}

export default App
