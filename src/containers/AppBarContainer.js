import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import AppBar from '../components/AppBar'
import { search } from '../ducks'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(search.actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)