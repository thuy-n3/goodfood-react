import React, { Component } from 'react';

class AboutMe extends Component{
  render(){
    return(
      <div className="aboutMeContainer">
        <div className="aboutImgContainer">About me image goes</div>
        <div className="aboutTextContainer">
          <div className="aboutTitle">Thuy Nguyen</div>
          <div className="aboutSubTitle">Eating and Creating since forever</div>
          <div className="aboutText">
            <p>Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk. Flavor centerpiece plate, delicious ribs bone-in meat, excess chef end. sweet effortlessly pork, low heat smoker soy sauce flavor meat, rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice burgers.</p>
          </div>
          <a href="/" className="readMore">Read More</a>
        </div>
      </div>
    )
  }
}

export default AboutMe;