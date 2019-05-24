import React from 'react'

import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Movie from './Movie'

const style = theme => ({
  root: {
    paddingTop: 24,
  }
})

const MoviesList = ({ movies, classes }) => (
  <Grid container spacing={8}
    alignContent="space-between"
    alignItems="flex-start"
    justify="center"
    className={classes.root}
  >
    { movies.length > 0 ? ([...movies].map(movie => (
        <Grid item>
          <Movie movie={movie}/>
        </Grid>
      ))) : 'Nada' }
  </Grid>
)

export default withStyles(style)(MoviesList)