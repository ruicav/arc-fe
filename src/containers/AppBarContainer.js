import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import AppBar from '../components/AppBar'
import { movies } from '../ducks'
import { search } from '../ducks'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...movies.actions, ...search.actions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)