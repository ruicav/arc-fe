import React from 'react'

import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Movie from './Movie'
import { Typography } from '@material-ui/core';

const style = theme => ({
  root: {
    paddingTop: 24,
  },
  title: {
    margin: 8
  }
})

const MoviesList = ({ movies, searching, classes }) => (
  <Grid container column spacing={8}
    alignContent="space-between"
    alignItems="flex-start"
    justify="center"
    className={classes.root}
  >
    <Grid item xs={12} className={classes.title}>
      <Typography align="center" variant="h6">{searching ? '' : 'Upcoming'}</Typography>
    </Grid>
    { movies.length > 0 ? ([...movies].map(movie => (
        <Grid item>
          <Movie movie={movie}/>
        </Grid>
      ))) : 'Nada' }
  </Grid>
)

export default withStyles(style)(MoviesList)