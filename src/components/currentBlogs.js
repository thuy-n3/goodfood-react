import React, { Component } from 'react';

class CurrentBlogs extends Component {
  render() {
    return (
      <div className="currentBlogContainers">
        <h1>This is from blog gallery</h1>
        <h1 className="sectionTitle">Blog</h1>
        <h2 className="sectionSubtitle">Recent Post from Blog</h2>
        <div className="BlogGridContainer">
          <div className="rowContainer">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
          </div>
          <div className="rowContainer">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
          </div>
          <div className="rowContainer">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
          </div>
        </div>
        <a href="/" className="seeAllPost">See All Blog Post</a>
      </div>
    )
  }
}

export default CurrentBlogs;