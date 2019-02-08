import React, { Component } from 'react';

class Header extends Component{
  render() {
    return (
      <div className="headerContainer">
      <h1>This is from header</h1>
        <div className="heroContainer">
          <h1>Hero image goes here</h1>
        </div>
        <h1 className="headerTitle">Good Food Blog</h1>
        <h2 className="headerSubTitle">Recipes for fit and healthy life</h2>
        <form className="searchBar">
          <input type="text" placeholder="Find a recipe"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Header; 


