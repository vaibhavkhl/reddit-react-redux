import { connect } from 'react-redux'
import ResultList from './ResultList.js'
import fetchPosts from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const ResultContainerList = connect(
  mapStateToProps
)(ResultList)

export default ResultContainerList;
