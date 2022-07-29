import * as React from 'react';



function ProjectsPage(){
  return (

<section class="projects-page" id="projects-page"> 
  <div class="projects-tag">
    <p>my projects</p>
  </div>
  <div class="projects-solution">
    <div className='project-1'>
        <div className='project-header'>
        <a href="https://shielded-peak-61835.herokuapp.com/">Blood Donation site: </a>
        <p>This is a prototype of blood donation site build for the understand of CRUD in react.js.</p>
        </div>
        <div class="linkedin link"><a href="https://shielded-peak-61835.herokuapp.com/" target="_blank"><img src="images/website.svg" alt="website" /></a></div>
        <div class="github link"><a href="https://github.com/Suraj-000/blood_donation_site" target="_blank"><img src="images/github.svg" alt="github" /></a></div>
    </div>
  </div>
</section>
  )
}

export default ProjectsPage;