import { connect } from 'react-redux'
import ResultList from './ResultList.js'
import fetchPosts from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (text) => {
      console.log('yes')
      dispatch(fetchPosts())
    }
  }
}

const ResultContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultList)

export default ResultContainerList;
