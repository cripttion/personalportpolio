
import './App.css';
import About from './Components/About';
import React from 'react';
import NavBar from './Components/NavBar';
import Works from './Components/Works';
import Resume from './Components/Resume';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  return (
    <>
    <NavBar />
      <Home  />
      <About />
      <Skills  />
      <Resume />
      <Works />
      <Contact  />
    </>
  );
}

export default App;
