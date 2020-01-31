import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell, Footer } from 'react-mdl';
import Logo from "../images/profile.jpg";
import Media from "./Media"
import Resume from "./Resume";
const PageLayout = styled.div`
width: '100%';
margin: 'auto';
`;

const StyledFooter = styled(Footer)`
position: fixed;
bottom: 0;
right: 0;
left: 0;
height: 5%;
width: 100%;
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
                <Resume/>
                <StyledFooter size="mini">
                    <Media/>
                </StyledFooter>
            </PageLayout>
        )
    }
}

export default LandingPage;