import React from 'react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';

import { Switch, Route } from 'react-router-dom'
const PrivateRoutes = () => (
    <Switch>
        <Route exact path="/portfolio/" component={LandingPage} />
        <Route exact path="/portfolio/Resume/" component={Resume} />
        <Route exact path="/portfolio/Contact/" component={Contact} />
        <Route exact path="/portfolio/Projects/" component={Projects} />
        <Route exact path="/portfolio/AboutMe/" component={AboutMe} />
    </Switch>
)

export default PrivateRoutes;