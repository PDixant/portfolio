import React from 'react';
import './App.css';
import logo from './skyscrapper.jpg'
import styled from 'styled-components'
const Krish = styled.p`
font-size: 300px;
`;
function App() {
  return (
    <div>
        <img src={logo} width={'100%'} height={'400px'} alt="skyscrapper"/>
        <Krish>
          Hello, Krish
        </Krish>
    </div>
  );
}

export default App;
