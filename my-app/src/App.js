import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import PrivateRoutes from './Components/PrivateRoutes';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div>
    <Layout>
        <Header title="Title" scroll style={{color: 'white'}}>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
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
