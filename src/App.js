import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Layout,Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import { NavBackground } from './Components/NavBackground';
import './Components/main.css';
import Footer from './Components/Footer.js'

function App() {
  return (
      <React.Fragment>
        <NavigationBar/>
        <NavBackground/>
        <div className="bg">
        <Layout>
        <Router>
          <Main/>
        </Router>
        </Layout>
        </div>
        <Footer/>
      </React.Fragment>
  );
}

export default App;
