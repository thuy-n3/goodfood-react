import React, { Component } from 'react';

class Navigation extends Component{
  render() {
    return(
      <div className="navContainer">
      <h1>This is from Navigation</h1>
        <a href="/" className="home">Home</a>
        <a href="/" className="aboutMe">About Me</a>
        <a href="/" className="myReceipes">My Recipes</a>
        <a href="/" className="blog">Blog</a>
        <a href="/" className="contact">Contact</a>
      </div>
    )
  }
}

export default Navigation;