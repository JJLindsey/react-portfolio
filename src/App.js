
//import './Sass/App.scss';
import Home from './components/Home'
import About from './components/About';
import NavTabs from './components/NavTabs'
import Contact from './components/Contact'
import Projects from './components/Projects'
//import Footer from './components/Footer'
// import Resume from './components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';

function App() {

  const [currentPage, handlePageChange] = useState('Home')
  //const [contactSelected, setContactSelected] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home/>;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
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
    <>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
      <div className="section">{renderPage(currentPage)} </div>
      </main>
    </>
    
  );
}

export default App;
