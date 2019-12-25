import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'react-mdl';
import Logo from "../profile.jpg"
import {Linkedin, Instagram, Facebook, Github} from "styled-icons/fa-brands/";

const PageLayout = styled.div`
width: '100%';
margin: 'auto';
`;

const StyledImg = styled.img`
height: 200px;
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
`;

const StyledGridLayout = styled(Grid)`
background: #bdc3c7;
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
background: linear-gradient(to right, #2c3e50, #bdc3c7);
`;

const StyledBanner = styled.div`
width: 75%;
margin: auto;
border-radius: 10px;
color: white;
text-align: center;
`;
const MediaContainer = styled.div`
padding-top: 20px;
text-align: center;
display: flex;
margin: 0 auto;
flex-wrap: wrap;
justify-content: space-between;
height: 100px;
width: 25%;
`;

const StyledLinkedIn = styled(Linkedin)`
height: 100px;
width: 100px;
`
const StyledInstagram = styled(Instagram)`
height: 100px;
width: 100px;
`

const StyledFacebook = styled(Facebook)`
height: 100px;
width: 100px;
`

const StyledGithub = styled(Github)`
height: 100px;
width: 100px;
`

const StyledHeader = styled.h1`
    font-size: ${props => {
    if (window.innerWidth > props.windowSize){
        return '56px';
    }
    else if (window.innerWidth <= props.windowSize &&
             window.innerWidth > 380) {
        return '30px';
    }
    else if(window.innerWidth < 380){
        return '25px';
    }
    }};
`;

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            minSize: 670,
        }
    }
    render(){
        console.log(window.innerWidth)
        const { minSize } = this.state;
        return(
            <PageLayout>
                <StyledGridLayout>
                    <Cell col={12}>
                    <StyledImg
                    src={Logo}
                    alt="avatar"
                    />
                    <StyledBanner>
                        <StyledHeader windowSize={minSize}>
                            Dixant Patel
                        </StyledHeader>
                    </StyledBanner>
                    </Cell>
                </StyledGridLayout>
                <MediaContainer>
                    <StyledLinkedIn/>
                    <StyledInstagram/>
                    <StyledFacebook/>
                    <StyledGithub/>
                </MediaContainer>
            </PageLayout>
        )
    }
}

export default LandingPage;