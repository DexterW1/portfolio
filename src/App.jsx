// import { useState } from 'react'
import './App.css'
import TopBarNav from './layouts/topbarnav'
import WelcomePage from './layouts/welcomepage';
import Skills from './layouts/skills';
import Projects from './layouts/projects';
import Contact from './layouts/contact';
function App() {
  function scrollToSection(id){
    const section = document.getElementById(id);
    if(section){
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 1);
    }
  }
  return (
    <>
        <TopBarNav scrollToSection={scrollToSection}/>
        <WelcomePage/>
        <Skills/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default App
