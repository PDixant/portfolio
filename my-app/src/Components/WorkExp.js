import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../images/index.png';
import { Cell, Grid } from 'react-mdl';
const Title = styled.div`
font-size: ${props => (props.ssize > 1250) ? '70px' : '35px' };
font-weight: bold;
text-align: center;
color: #ECEFF1;
padding-top: 100px;
padding-bottom: 50px;
`;

const CompName = styled.div`
text-align: left;
font-weight: bold;
background: #FFC857;
display: inline-block;
margin: auto;
overflow: hidden;
font-size: ${props => (props.ssize > 1250) ? '50px' : '20px'}
padding: 20px;
color: #3b3838;
`;

const CompDiscTitle = styled.span`
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px' : '20px'}
padding-bottom: 30px;
`;

const CompDisc = styled.div`
text-align: left;
float: right;
background: #FFC857;
display: inline-block;
width: 40%;
overflow: hidden;
font-size: ${props => (props.ssize > 1250) ? '30px' : '12px'}
padding: 20px;
color: #3b3838;
`;
class WorkExp extends Component{
    constructor(props){
        super(props);
        this.state = {
            screenSize: window.innerWidth
        }
    }

    render(){
        const {
            screenSize
        } = this.state
    return(
        <div>
        <Title ssize={screenSize}>
            Previous Work
        </Title>
        <Grid>
            <Cell col={12}>
            <CompName ssize={screenSize}>
                <img src={Logo} alt="canvass logo"/>
                Canvass Analytics
            </CompName>
            </Cell>
            <Cell col={12}>
            <CompDisc>
            <CompDiscTitle ssize={screenSize}>
                What is Canvass?
            </CompDiscTitle>
                <br/>
                <br/>
                Canvass is an industrial IoT based platform solution
                that is a global leader in industrial AI located at the
                heart of downtown Toronto. The platform accelerates
                mission-critical decision making to minimize energy
                consumption, Increase throughput, reduce downtime and
                extend the lifetime of a plant’s assets. Canvass has
                been funded by Google’s Gradient venture funds and
                Fortune 500 companies use the platform to optimize
                complex production processes, generate new revenue
                streams, and reduce energy and operating costs.
            </CompDisc>
            </Cell>
        </Grid>
        </div>
    )
    }
}
export default WorkExp;