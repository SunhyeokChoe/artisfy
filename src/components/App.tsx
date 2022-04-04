import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'components/styles/GlobalStyle'
import theme from 'components/styles/theme'
// import { lightTheme, darkTheme } from 'components/styles/theme'
import Home from 'pages/Home'

const App: React.FC = (): JSX.Element => {
  // const [theme, setTheme] = useState(lightTheme)
  // const [currThemeText, setCurrThemeText] = useState('Light Theme')

  // // 각 theme은 state로 관리되며 버튼 클릭 이벤트 시 변경됩니다.
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
