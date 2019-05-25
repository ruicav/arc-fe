import React from 'react'
import Card from '@material-ui/core/Card'

import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography, Chip } from '@material-ui/core'

const style = theme => ({
  card: {
    maxWidth: 342
  },
  media: {
    height: 513,
    width: 342 
  },
  chip: {
    margin: 10
  },
  expanded: {
    transform: 'rotate(180deg)'
  },
  compressed: {
    transform: 'rotate(0deg)'
  },
  overview: {
    padding: 8
  }
})

const Movie = ({ movie, classes }) => {
  const [expanded, setExpanded] = React.useState(false)

  function handleExpandClick() {
    setExpanded(!expanded)
  }

  return (
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
        <Grid container direction="row">
          <Grid item xs={12}>
            {[...movie.genres]
              .slice(0, 2)
              .map(genre => (
                <Chip
                  variant="outlined"
                  color="primary"
                  label={genre}
                  className={classes.chip}
                  key={`chip${movie.title}${Math.random()*100+1}`}
                />
            ))}
          </Grid>
        </Grid>
        <CardActions>
          <Grid container justify="flex-end">
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleExpandClick}
            >
              { expanded ? "Less" : "More" }
              <ExpandMoreIcon className={expanded ? classes.expanded : classes.compressed}/>
            </Button>
          </Grid>
        </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" align="left" paragraph className={classes.overview}>
            {movie.overview}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default withStyles(style)(Movie)