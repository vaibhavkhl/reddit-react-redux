import { combineReducers } from 'redux';
import FETCH_POSTS from '../actions/index.js'

const posts = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
    console.log('reducer')
    console.log(action.payload)
      return { ...state, postsList: {posts:[]} };
    case 'FETCH_POSTS_SUCCESS':
      console.log('success')
      return { ...state, postsList: {posts: action.payload.data.results.artist} };
    default:
      return state
  }
}

const redditApp = combineReducers({
  posts
})

export default redditApp;
