import React from 'react'

import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Movie from './Movie'

const style = theme => ({
  root: {
    maxWidth: 700
  }
})

const MoviesList = ({ movies, actions, classes }) => (
  <div>
    <Grid container spacing={8}
      alignContent="space-between"
      alignItems="center"
      justify="center"
    >
      { [...movies].map(movie => (
          <Grid item>
            <Movie movie={movie}/>
          </Grid>
        )) }
    </Grid>
  </div>
)

export default withStyles(style)(MoviesList)