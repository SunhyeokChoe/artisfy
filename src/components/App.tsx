import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'components/styles/GlobalStyle'
import theme from 'components/styles/theme'
// import { lightTheme, darkTheme } from 'components/styles/theme'
import Home from 'pages/Home'

const App: React.FC = (): JSX.Element => {
  // const [theme, setTheme] = useState(lightTheme)
  // const [currThemeText, setCurrThemeText] = useState('Light Theme')

  // const switchTheme = () => {
  //   const nextTheme = theme === lightTheme ? darkTheme : lightTheme
  //   setTheme(nextTheme)
  //   const nextThemeText = theme === lightTheme ? 'Dark Theme' : 'Light Theme'
  //   setCurrThemeText(nextThemeText)
  // }

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
