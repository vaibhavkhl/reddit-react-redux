import React, { Component } from 'react';
import fetchPost from '../actions/index.js'

// const search = (values, dispatch) => {
//   return dispatch(fetchPost);
// }

class Search extends Component {
  render() {
    return (
      <div>
        Search: <input type='text' />
        <button onClick={this.props.fetchPosts()}>Go</button>
      </div>
    );
  }
}

export default Search;
