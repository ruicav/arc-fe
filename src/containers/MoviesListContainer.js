import React from 'react'

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import MoviesList from '../components/MoviesList'
import { movies } from '../ducks'
import movieApi from '../movieApi'

class MovieListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        actions={this.props.actions}
        searching={this.props.searching}
      />
    )
  }
  componentWillMount() {
    movieApi.getUpcoming()
      .then(result => {
        this.props.actions.setMovies({movies: result.data}) 
      })
  }
}

const { getMovies } = movies.selectors

const mapStateToProps = state => ({
  movies: getMovies(state),
  searching: state.search
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movies.actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)