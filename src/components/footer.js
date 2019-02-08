import React, { Component } from 'react';

class Footer extends Component{
  render() {
    return(
      <div className="footContainer">
        <h1>This is from the foot</h1>
          <div className="twitterContainer">
            <div className="twitItem"></div>
          </div>
          <div className="commentContainer">
            <div className="commentItem"></div>
          </div>
          <div className="instagramContainer">
            <div className="instaItem"></div>
          </div>
          <div className="footerMenu">Foot Navigation goes here</div>
      </div>
    )
  }
}

export default Footer;