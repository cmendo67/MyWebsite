import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import NoMatch from './NoMatch';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/About" component={About}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume"/>
        <Route component={NoMatch}/>
    </Switch>
)
export default Main;