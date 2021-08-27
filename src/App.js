
import './Sass/App.scss';
import About from './components/About';
import Nav from './components/Nav'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {Route, Switch} from 'react-router-dom'

//import { useState } from 'react';

function App() {

    //const [currentPage, handlePageChange] = useState('Home');
  
    const renderPage = () => {
      // Add a switch statement that will return the appropriate component of the 'currentPage
      <Switch>
        <Route path='/About' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    };


  return (
    <div className="App">
        <Nav />
        <About />
        <Projects/>
        <Contact />
        <Footer />
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
    </div>
  );
}

export default App;
