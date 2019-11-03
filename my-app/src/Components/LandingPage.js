import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'react-mdl';
import Logo from "../profile.png"
const PageLayout = styled.div`
width: '100%';
margin: 'auto';
`;

const StyledImg = styled.img`
height: 250px;
padding-top: 5em;
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 95%;
`;

const StyledGridLayout = styled(Grid)`
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
background: linear-gradient(to right, #2c3e50, #bdc3c7);
`;

const StyledBanner = styled.div`
background-color: black;
opacity: .8;
width: 75%;
margin: auto;
border-radius: 10px;
font-size: 66px;
font-weight: bold;
color: white;
text-align: center;
`;


class LandingPage extends Component {
    render(){
        return(
            <PageLayout>
                <StyledGridLayout>
                    <Cell col={12}>
                    <StyledImg
                    src={Logo}
                    alt="avatar"
                    />
                    <StyledBanner>
                        <h1>
                        Full Stack Engineer
                        </h1>
                    </StyledBanner>
                    </Cell>
                </StyledGridLayout>
            </PageLayout>
        )
    }
}

export default LandingPage;