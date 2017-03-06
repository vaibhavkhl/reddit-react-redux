export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  // const request = axios({
  //   method: 'get',
  //   url: `${ROOT_URL}/posts`,
  //   headers: []
  // });
  console.log('action')
  return {
    type: FETCH_POSTS,
    payload: {}
  };
}
