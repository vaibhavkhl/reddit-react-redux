import { connect } from 'react-redux'
import Search from './Search.js'
import fetchPosts from '../actions/index.js';

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (text) => {
      console.log('yes')
      //dispatch(fetchPosts())
    }
  }
}

const SearchContainer = connect(
  mapDispatchToProps
)(Search)

export default SearchContainer;
