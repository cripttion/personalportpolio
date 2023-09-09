
import './App.css';
import About from './Components/About';
import React,{useRef} from 'react';
import NavBar from './Components/NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Works from './Components/Works';
import Resume from './Components/Resume';
import Home from './Components/Home';
import bgimage from './assests/Images/bgHome.png'
import bgAbout from './assests/Images/bgAbout.png'
import Contact from './Components/Contact';
import Skills from './Components/Skills';
function App() {
  return (
    <>
    <NavBar />
      <Home />
      <About />
      <Skills />

    </>
  );
}

export default App;
