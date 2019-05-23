import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import MoviesList from '../components/MoviesList'
import { movies } from '../ducks'

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
)(MoviesList)