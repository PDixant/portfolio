import React from 'react';
import './App.css';
import logo from './skyscrapper.jpg'
import styled from 'styled-components'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

const LayoutBackground = styled.div`
height: 400px;
width: 100%;
position: relative;
`;

function App() {

  return (
    <LayoutBackground>
    <Layout style={{background: `url(${logo}) center / cover`}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
    </LayoutBackground>
  );
}

export default App;
