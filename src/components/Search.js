import React, { Component } from 'react';
//import {fetchPosts, fetchPostsSuccess} from '../actions/index.js';

class Search extends Component {
  render() {
    return (
      <div>
        Search: <input type='text' />
        <button onClick={() => this.props.fetchPosts()}>Go</button>
      </div>
    );
  }
}

export default Search;
