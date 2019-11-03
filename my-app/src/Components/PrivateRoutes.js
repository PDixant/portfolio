import React from 'react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';

import { Switch, Route } from 'react-router-dom'
const PrivateRoutes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/AboutMe" component={AboutMe} />
    </Switch>
)

export default PrivateRoutes;