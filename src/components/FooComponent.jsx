import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Card from '@material-ui/core/Card'

const style = theme => ({
  root: {
    maxWidth: 700
  }
})

const FooComponent = ({ movies, actions, classes }) => (
  <Card className={classes.root}>
    {JSON.stringify(movies)}
  </Card>
)

export default withStyles(style)(FooComponent)