import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'styles'
import { RootContainer } from 'components'

import { configureStore, reportWebVitals } from 'core'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
