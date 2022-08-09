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
        <h3>To-Do Application </h3>
        <p>This is a responsive full stack To Do list website where user can create account, add and delete the tasks. </p>
        </div>
        <div className='project-links'>
        <div class="github link"><a href="https://todolist-lite.herokuapp.com/" target="_blank"><img src="images/website.svg" alt="website" /></a></div>
        <div class="github link"><a href="https://github.com/Suraj-000/todo-list.git" target="_blank"><img src="images/github.svg" alt="github" /></a></div>
        </div>
    </div>
    <div className='project-1'>
        <div className='project-header'>
        <h3>Blood Donation site</h3>
        <p>This is a prototype of blood donation site build for the understand of CRUD in react.js.</p>
        </div>
        <div className='project-links'>
        <div class="linkedin link"><a href="https://shielded-peak-61835.herokuapp.com/" target="_blank"><img src="images/website.svg" alt="website" /></a></div>
        <div class="github link"><a href="https://github.com/Suraj-000/blood_donation_site" target="_blank"><img src="images/github.svg" alt="github" /></a></div>
        </div>
    </div>
    
  </div>
</section>
  )
}

export default ProjectsPage;