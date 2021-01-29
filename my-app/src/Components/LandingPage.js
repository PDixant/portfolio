import React, { Component } from 'react';
import styled from 'styled-components';
import { Cell } from 'react-mdl';
import BGimage from "../images/road.jpg";
import Navigation from "./Navigation";

const PageLayout = styled.div`
width: 100%;

margin: auto;
overflow-y: hidden;
`;


const EmptySpace = styled.div`
height: 150px;
width: 100px;
`;


const StyledGridLayout = styled.div`
height: 350px;
background: url(${BGimage}) center / cover;
margin-top: -25px;
`;


const StyledBanner = styled.div`
width: 75%;
display: block;
margin: auto;
border-radius: 10px;
color: #DEE3E7;
padding-top: 190px;
padding-right: 50px;
;
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