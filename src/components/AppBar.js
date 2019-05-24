import React from 'react'

import MaterialAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import SearchIcon from '@material-ui/icons/Search'
import { InputAdornment, Grid, FormControl, InputLabel, Input, TextField } from '@material-ui/core';

import movieApi from '../movieApi'

const styles = theme => ({
  appBar: {
    flexGrow: 1,
    padding: 8
  },
  searchField: {
    padding: 8
  }
})

const AppBar = ({ actions, classes }) => {
  function handleSearchChange(event) {
    const query = event.target.value
    if(query.length > 1) {
      movieApi.searchMovies(query)
      .then(result => actions.setMovies({movies: result.data}))
      .then(actions.isSearching({searching: true}))
    }
    else {
      movieApi.getUpcoming()
      .then(result => actions.setMovies({movies: result.data}))
      .then(actions.isSearching({searching: false}))
    }
  }

  return (
    <MaterialAppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" noWrap align="center">
              ArcMovies
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.searchField}>
            <Grid container alignItems="center" justify="space-around">
                <TextField
                  id="search-movies-input"
                  label="Search Movies"
                  placeholder="Search by movie title"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleSearchChange}
                />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  )
}

export default withStyles(styles)(AppBar)