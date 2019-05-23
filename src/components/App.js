import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import FooContainer from '../containers/FooContainer'

const theme = createMuiTheme({})

function App(props) {
  const { classes } = props
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <FooContainer />
      </MuiThemeProvider>
    </div>
  )
}

export default App
