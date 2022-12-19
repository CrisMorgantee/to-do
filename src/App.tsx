import { Container } from './components/Container'
import Empty from './components/Empty'
import Form from './components/Form'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <Empty />
      </Container>
    </>
  )
}

export default App
