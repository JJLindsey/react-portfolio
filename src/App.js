
//import './Sass/App.scss';
import Home from './components/Home'
import About from './components/About';
import NavTabs from './components/NavTabs'
import Contact from './components/Contact'
import Projects from './components/Projects'
//import Footer from './components/Footer'

import { useState } from 'react';

function App() {

  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };


  return (
    // <div className="App">
    //     {/* <Nav />
    //     <About />
    //     <Projects/>
    //     <Contact />
    //     <Footer />
    //     {
    //       // Render the component returned by 'renderPage()'
    //       renderPage()
    //     } */}
    // </div>
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
    
  );
}

export default App;
