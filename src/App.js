
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Works from './Components/Works';
import Resume from './Components/Resume';
import Home from './Components/Home';
import bgimage from './assests/Images/bgHome.png'
function App() {
  return (
    <>
    <NavBar />
      <Parallax pages={4} className='animated'>
   
      <ParallaxLayer offset={0} speed={2.5} 
        style={{backgroundImage:`url(${bgimage})`,backgroundSize:'cover'}}
      >
        <Home />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
        <About />
      </ParallaxLayer>  
      <ParallaxLayer offset={2} speed={2.5}>
        <Works />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={2.5}>
        <Works />
      </ParallaxLayer>
    
    </Parallax>

    </>
  );
}

export default App;
