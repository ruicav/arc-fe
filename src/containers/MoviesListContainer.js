import React from 'react'

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import MoviesList from '../components/MoviesList'
import { movies } from '../ducks'

import axios from 'axios'

class MovieListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        actions={this.props.actions}
      />
    )
  }
  componentWillMount() {
    axios.get(
      'http://localhost:9000/movies/upcoming'
    )
      .then(result => {
        this.props.actions.setUpcoming({movies: result.data}) 
      })
  }
}

const { getMovies } = movies.selectors

const mapStateToProps = state => ({
  movies: getMovies(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movies.actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)