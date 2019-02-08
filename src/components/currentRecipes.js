import React, { Component } from 'react';

class CurrentRecipes extends Component{
  render(){
    return(
      <div className="currentRecipesContainers">
      <h1>This is from receipe gallery</h1>
        <h1 className="sectionTitle">New Recipes</h1>
        <h2 className="sectionSubtitle">Recent Recipes On The Blog</h2>
        <div className="recipesGridContainer">
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
      </div>
    )
  }
}

export default CurrentRecipes;