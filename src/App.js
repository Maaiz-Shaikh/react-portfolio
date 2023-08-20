import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import the NavBar component
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="home">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer /> {/* Display the Footer component */}
        </div>
      </div>
    </Router>
  );
}

export default App;
