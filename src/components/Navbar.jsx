import * as React from 'react';


function Navbar(){

    return (
      <section>
      <nav>
          <div class="nav-logo">
            <a href="#">chapter<span class="logo-half">zero</span></a>
          </div>
          <div class="nav-menu">
            <i id="icon" class="menu-bar-show"><img src="images/menu2.svg" alt="menu-bar" /></i>
            <ul>
              <li class="active btn-one"><a href="#home-page">home</a></li>
              <li><a class="btn-one" href="#about-page">about</a></li>
              <li><a class="btn-one" href="#experience-page">experience</a></li>
              <li><a class="btn-one" href="#projects-page">projects</a></li>
              <li><a class="btn-one" href="#contact-page">contact</a></li>
            </ul>
          </div>
      </nav>
    </section>
    )
}
export default Navbar;