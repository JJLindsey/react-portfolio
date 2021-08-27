
import './App.css';

import About from './components/About';
import Nav from './components/Nav'
import Contact from './components/Contact'
import Projects from './components/Projects'

import { useState } from 'react';

function App() {

    const [currentPage, handlePageChange] = useState('Home');
  
    const renderPage = () => {
      // Add a switch statement that will return the appropriate component of the 'currentPage
      
        switch(currentPage){
          case 'About':
            return <About/>
          case 'Blog':
            return <Projects/>
          case 'Contact':
            return <Contact/>
          default:
            return <About/>
        }
    };


  return (
    <div className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        <About />
        <Projects/>
        <Contact />
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
    </div>
  );
}

export default App;
