import React, { Component } from 'react';
//import {fetchPosts, fetchPostsSuccess} from '../actions/index.js';

class Search extends Component {
  render() {
    return (
      <div>
        Search music artist <input type='text' onChange={(e) => this.props.fetchPosts(e.target.value)}/>
      </div>
    );
  }
}

export default Search;
