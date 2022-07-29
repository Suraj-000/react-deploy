import * as React from 'react';


function AboutPage(){
  return (
    <section class="about-page" id="about-page">
    <div class="techstack">
      <p>my techstack</p>
    </div>
    <div class="techstack-menu">
      <ul class="techstack-menu-items">
        <div class="size-flex1">
  
          <div class="flutter"><img src="images/flutter.svg" alt="flutter" /></div>
          <div class="node.js"><img src="images/nodejs.svg" alt="node.js" /></div>
          <div class="react"><img src="images/react.svg" alt="react"/></div>
        </div>
          <div class="size-flex2">
  
          <div class="vue.js"><img src="images/vue.svg" alt="vue.js"/></div>
          <div class="python"><img src="images/python.svg" alt="python"/></div>
        </div>
      </ul>
    </div>
    <div  class="my-tag">
      <p>I am Suraj Reddy with no clue about tomorrow.</p>
    </div>
    <div class="my-thought">
      <p>Take a deep breath and chill out.</p>
    </div>
  </section>
    )
}

export default AboutPage;