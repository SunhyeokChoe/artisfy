import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'components/styles/GlobalStyle'
import theme from 'components/styles/theme'
import Home from 'pages/Home'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
