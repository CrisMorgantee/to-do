import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '~/styles/global'
import theme from '~/styles/theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <GlobalStyles />
      <App />
    </StrictMode>
  </ThemeProvider>
)
