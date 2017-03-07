import React, { Component } from 'react';
import Search from './Search.js'

class ResultList extends Component {
  render() {
    var list = []
    if (this.props.posts.postsList) {
      this.props.posts.postsList.posts.forEach(function(artist) {
        list.push(<div key={artist.mbid}>{artist.name}</div>)
      })
    }
    return (
      <div>
        <h1>Results</h1>
        {list}
      </div>
    );
  }
}

export default ResultList;
