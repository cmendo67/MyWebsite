import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar  from './Components/NavigationBar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
          <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={About}/>
                {/* <Route path="/About" component={About}/> */}
                <Route path="/Projects" component={Projects}/>
                <Route path="/Resume"/>
             </Switch>
          </Router>
  );
}

export default App;
