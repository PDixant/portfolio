import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell, Footer } from 'react-mdl';
import Logo from "../images/profile.jpg";
// import Banner from "../images/space.jpg";
import Media from "./Media"
import Navigation from "./Navigation";

const PageLayout = styled.div`
width: '100%';
margin: 'auto';
overflow-y: 'scroll';
`;

const StyledFooter = styled(Footer)`
position: fixed;
left: 0;
right: 0;
bottom: 0;
height: 5%;
text-align: left; 
width: 100%;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(2,0,36,1) 100%);
`;

const EmptySpace = styled.div`
height: 150px;
width: 100px;
`;

const StyledImg = styled.img`
height: 200px;
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 50%;
`;


const StyledGridLayout = styled(Grid)`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(2,0,36,1) 100%);
`;

// const StyledGridLayout = styled.div`
// background-image: url(${Banner})
// height: 100%
// width: 100%
// `;

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
                <Navigation/>
                <StyledFooter size="mini">
                    <Media/>
                </StyledFooter>
                <EmptySpace/>
            </PageLayout>
        )
    }
}

export default LandingPage;