import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import PrivateRoutes from './Components/PrivateRoutes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderGradiant = styled(Header)`
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
background: linear-gradient(to right, #2c3e50, #bdc3c7);
`;

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <HeaderGradiant title={<Link style={{textDecoration: 'none', color: 'white'}} to="/portfolio/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/portfolio/Resume/">Resume</Link>
                <Link to="/portfolio/AboutMe/">About me</Link>
                <Link to="/portfolio/Contact/">Contact</Link>
                <Link to="/portfolio/Projects/">Projects</Link>
            </Navigation>
        </HeaderGradiant>
        <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio/">MyPortfolio</Link>}>
            <Navigation>
                <Link to="/portfolio/Resume/">Resume</Link>
                <Link to="/portfolio/AboutMe/">About Me</Link>
                <Link to="/portfolio/Contact/">Contact</Link>
                <Link to="/portfolio/Projects/">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content" />
        <PrivateRoutes/>
        </Content>
    </Layout>
    </div>
  );
}

export default App;
