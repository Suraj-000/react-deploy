import React from "react";
import Navbar from './Navbar';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import ProjectsPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";


function App() {
  return (
    <div>
    <Navbar/>
    <HomePage/>
    <AboutPage/>
    <ExperiencePage/>
    <ProjectsPage/>
    <ContactPage/>
    <Footer/>
    </div>
  );
}

export default App;
