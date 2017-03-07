export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
import axios from 'axios';

var baseUrl = 'https://ws.audioscrobbler.com/2.0/';
var apikey = '3c3a2bae12b83afb0b4af378d2783f08';
var query = 'tom'
var ROOT_URL = baseUrl + '?method=artist.search&artist=' + query + '&api_key=' + apikey + '&format=json';



export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}`,
    headers: []
  });
  console.log('action')
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  console.log(posts)
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

// export function fetchPosts() {
//   return {
//   type: FETCH_POSTS,
//   payload: 'test'
//   };
// }
