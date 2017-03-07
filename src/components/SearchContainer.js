import React, { Component } from 'react';
import { connect } from 'react-redux'
import Search from './Search.js'
import {fetchPosts, fetchPostsSuccess} from '../actions/index.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (query) => {
      dispatch(fetchPosts(query)).then((response) => {
        dispatch(fetchPostsSuccess(response.payload.data))
      });
    }
  }
}

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search)

export default SearchContainer;
