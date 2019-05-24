import React from 'react'

import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Movie from './Movie'
import { Typography, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const style = theme => ({
  root: {
    paddingTop: 24,
  },
  title: {
    margin: 8
  },
  fab: {
    margin: 8
  }
})

const loadMoreMovies = ({getNextPage, pageControl, addMovies, updateControl}) => {
  getNextPage(pageControl)
    .then(result => {
      addMovies({movies: result.data.results})
      updateControl({
        control: {
          isSearching: pageControl.isSearching,
          currentPage: result.data.page,
          totalPages: result.data.total_pages,
          query: pageControl.query
        }
      })
    })
}

const MoviesList = ({ movies, pageControl, getNextPage, addMovies, updateControl, classes }) => (
  <Grid container spacing={8}
    alignContent="space-between"
    alignItems="flex-start"
    justify="center"
    className={classes.root}
  >
    <Grid item xs={12} className={classes.title}>
      <Typography align="center" variant="h6">
        {pageControl.isSearching ? '' : 'Upcoming'}
      </Typography>
    </Grid>
    { movies.length > 0 ? ([...movies].map(movie => (
        <Grid item key={`item${movie.title}${Math.random()*100+1}`}>
          <Movie movie={movie}/>
        </Grid>
      ))) : (<Typography variant="body1"> No movies to show :( </Typography>)}
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid item>
        <Fab 
          color="primary"
          className={classes.fab}
          disabled={pageControl.currentPage === pageControl.totalPages}
          onClick={() => loadMoreMovies({getNextPage, pageControl, addMovies, updateControl})}
        >
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {`Page ${pageControl.currentPage}/${pageControl.totalPages}`}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(style)(MoviesList)