import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [

      ]
    default:
      return state
  }
}

const redditApp = combineReducers({
  posts
})

export default redditApp;
