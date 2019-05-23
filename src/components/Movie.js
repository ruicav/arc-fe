import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography, Chip } from '@material-ui/core';
import { movies } from '../ducks';

const style = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 513,
    width: 342 
  },
  chip: {
    margin: 10
  }
})

const Movie = ({ movie, actions, classes }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      title={movie.title}
      image={movie.image_path}
    >
    </CardMedia>
    <CardContent>
      <Typography variant="h6" noWrap>
        {movie.title}
      </Typography>
      <Typography variant="subtitle1">
        Release Date: {movie.release_date}
      </Typography>
      {[...movie.genres]
        .map(genre => (
          <Chip variant="outlined" label={genre} className={classes.chip}/>
        ))}
    </CardContent>
  </Card>
)

export default withStyles(style)(Movie)