
//import './Sass/App.scss';
import Home from './components/Home'
import About from './components/About';
import NavTabs from './components/NavTabs'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import Resume from './components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

function App() {

  return (
    
    <>
      <Router>
        <NavTabs />
        <Routes>
          <Route path='/*' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  
  );
}

export default App;
