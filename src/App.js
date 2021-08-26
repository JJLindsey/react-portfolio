
import './App.css';

import About from './components/About';
import Nav from './components/Nav'
import Contact from './components/Contact'
import Projects from './components/Projects'

import { useState } from 'react';

function App() {



  return (
    <div className="App">
        <Nav/>
        <About />
        <Projects/>
        <Contact />
    </div>
  );
}

export default App;
