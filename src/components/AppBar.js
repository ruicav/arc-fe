import React from 'react'

import MaterialAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  appBar: {
    position: 'relative'
  }
})

const AppBar = ({ movies, actions, classes }) => (
  <MaterialAppBar position="static" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h5" color="inherit" noWrap>
        Arctouch movie's app
      </Typography>
    </Toolbar>
  </MaterialAppBar>
)

export default withStyles(styles)(AppBar)