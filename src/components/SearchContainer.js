import React, { Component } from 'react';
import { connect } from 'react-redux'
import Search from './Search.js'
import {fetchPosts, fetchPostsSuccess} from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
    query: ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      //dispatch(fetchPosts())
      dispatch(fetchPosts()).then((response) => {
        dispatch(fetchPostsSuccess(response.payload.data))
      });
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;
