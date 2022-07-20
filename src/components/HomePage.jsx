import * as React from 'react';


function HomePage(){
    return (
      <>
      <section class="home-page" id="home-page">
      <div class="hero-details">
          <p class="hero-name-half1">I am</p>
          <p class="hero-name-half2">suraj.</p>
          <p class="hero-skills">mobile dev || web dev || drafter || basketball.</p>
          <div class="hero-links-items">
            <div class="resume link"><a href="#home-page"></a>resume</div>
            <div class="github link"><a href="https://github.com/Suraj-000" target="_blank"><img src="images/github.svg" alt="github" /></a></div>
            <div class="linkedin link"><a href="https://www.linkedin.com/in/suraj-reddy-aabbccdde/" target="_blank"><img src="images/in.svg" alt="linkedin" /></a></div>
            <div class="twitter link"><a href="https://twitter.com/Suraj__000" target="_blank"><img src="images/twitter2.svg" alt="twitter" /></a></div>
            <div class="medium link"><a href="https://medium.com/@surajreddy2002s" target="_blank"><img src="images/medium.svg" alt="medium" /></a></div>
          </div>
      </div>
      <div class="hero-image">
        <img src="images/new-hero2 (1).svg" alt="hero"/>
      </div>
    </section>
      </>
    )
}

export default HomePage;

