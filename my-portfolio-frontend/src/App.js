import {Routes,Route} from 'react-router-dom'; 
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Navbar from './Components/Navbar';

function App() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    "background": {
      "color": {
        "value": "#000022"
      }
    },
    "fpsLimit": 60,
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star"
      },
      "opacity": {
        "value": 0.8
      },
      "size": {
        "value": 2,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "outMode": "out"
      }
    },
    "detectRetina": true
  };  
  
  return (
    <>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;