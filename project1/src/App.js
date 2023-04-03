import React from 'react';
import { Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutme from './pages/Aboutme';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Workshops from './pages/Workshops';
import Contactme from './pages/Contactme';
import './App.css';
function App() {
  return (
    <div className="App">
      
      <INavbar/>
      <Routes>

        <Route path = "Aboutme" element ={<Aboutme/>}/>
        <Route path = "Qualification" element ={<Qualification/>}/>
        <Route path = "Skills" element ={<Skills/>}/>
        <Route path = "Hobbies" element = {<Hobbies/>}/>
        <Route path = "Projects" element ={<Projects/>}/>
        <Route path = "Experience" element ={<Experience/>}/>
        <Route path = "Certifications" element ={<Certifications/>}/>
        <Route path = "Contactme" element ={<Contactme/>}/>
        <Route path = "Workshops" element ={<Workshops/>}/>

      </Routes>
    </div>
  );
}

export default App;
