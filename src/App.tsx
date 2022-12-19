import { Container } from './components/Container'
import Empty from './components/Empty'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Empty />
      </Container>
    </>
  )
}

export default App
