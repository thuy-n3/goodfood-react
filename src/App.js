import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/header.js';
import Navigation from './components/navigation.js';
import CurrentRecipes from './components/currentRecipes.js';
import AboutMe from './components/aboutme.js';
import CurrentBlogs from './components/currentBlogs.js';
import Footer from './components/footer.js';
import ContactMe from './components/contactme.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>this is from app.js</h1>
        
        <ContactMe />
        
      </div>
      );
    }
  }
  
  export default App;
  
  
//</div>img src={logo} className="App-logo" alt="logo" />