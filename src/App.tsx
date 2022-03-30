import React from 'react'

import GlobalStyle from 'components/styles/GlobalStyle'
import Home from 'pages/Home'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  )
}

export default App
