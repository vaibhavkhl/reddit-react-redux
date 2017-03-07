export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
import axios from 'axios';

function buildUrl(query) {
  var baseUrl = 'https://ws.audioscrobbler.com/2.0/';
  var apikey = '3c3a2bae12b83afb0b4af378d2783f08';
  var ROOT_URL = baseUrl + '?method=artist.search&artist=' + query + '&api_key=' + apikey + '&format=json';
  return ROOT_URL
}

export function fetchPosts(query) {
  const request = axios({
    method: 'get',
    url: buildUrl(query),
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
