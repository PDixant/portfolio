import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'react-mdl';
import Logo from "../images/profile.jpg";
import BGimage from "../images/road.jpg";
import Navigation from "./Navigation";

const PageLayout = styled.div`
width: '100%';
margin: 'auto';
overflow-y: 'scroll';
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


const StyledGridLayout = styled.div`
background: url(${BGimage}) center / cover;
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
                            <StyledHeader windowSize={minSize} color="grey">
                            Dixant Patel
                        </StyledHeader>
                    </StyledBanner>
                    </Cell>
                </StyledGridLayout>
                <Navigation/>
                <EmptySpace/>
            </PageLayout>
        )
    }
}

export default LandingPage;