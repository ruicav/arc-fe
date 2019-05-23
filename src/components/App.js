import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import MoviesListContainer from '../containers/MoviesListContainer'
import AppBarContainer from '../containers/AppBarContainer'

const theme = createMuiTheme({})

function App(props) {
  const { classes } = props
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBarContainer />
        <MoviesListContainer />
      </MuiThemeProvider>
    </div>
  )
}

export default App
