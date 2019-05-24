import React from 'react'

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import MoviesList from '../components/MoviesList'
import { movies, pageControl } from '../ducks'
import movieApi from '../movieApi'

class MovieListContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        pageControl={this.props.pageControl}
        getNextPage={movieApi.getNextPage}
        addMovies={this.props.actions.addMovies}
        updateControl={this.props.actions.updateControl}
      />
    )
  }
  componentWillMount() {
    movieApi.getUpcoming()
      .then(result => {
        this.props.actions.setMovies({movies: result.data.results}) 
        this.props.actions.updateControl({
          control: {
            isSearching: false,
            currentPage: result.data.page,
            totalPages: result.data.total_pages,
            query: ''
          }
        })
      })
  }
}

const { getMovies } = movies.selectors

const mapStateToProps = state => ({
  movies: getMovies(state),
  pageControl: state.pageControl
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...movies.actions, ...pageControl.actions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)