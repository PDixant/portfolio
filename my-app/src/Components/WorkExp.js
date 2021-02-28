import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../images/index.png';
import { Cell, Grid } from 'react-mdl';
import Canvass from '../images/canvass.jpg'
import DevImage from '../images/dev_1.jpg'
const Title = styled.div`
font-size: ${props => (props.ssize > 1250) ? '30px' : '20px' };
font-weight: bold;
text-align: center;
color: #ECEFF1;
padding-top: 100px;
padding-bottom: 50px;
`;

const InfoContainer = styled.div`
display: flex;
margin: auto;
justify-content: center;
align-items: center;
text-align: center;
background:#ECEFF1;
overflow: hidden;
width:  ${props => (props.ssize > 1250) ? '40%;' : '100%;'}
padding: 20px;
border-radius: 12px;
`;

const CompName = styled.div`
text-align: center;
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px;' : '15px;'}
color: #3b3838;
padding-bottom: 30px;
`;

const CompDiscTitle = styled.span`
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px;' : '20px;'}
`;

const CompDiscContainer = styled.div`
text-align: left;
color: #3b3838;
width: ${props => (props.ssize > 1250) ? '80%;' : '100%'}
padding-top: 30px;
padding-left: ${props => (props.ssize > 1250) ? '30px;' : '0px;'}
`;

const CompDisc = styled.p`
font-size: ${props => (props.ssize > 1250) ? '20px;' : '12px;'}
padding-bottom: 15px;
`;

const RoleTitleContainer = styled.div`
text-align: left;
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px;' : '20px;'}
padding-left: ${props => (props.ssize > 1250) ? '30px;' : '0px;'}
`;

const RoleDisc = styled.p`
font-size: ${props => (props.ssize > 1250) ? '20px;' : '12px;'}
font-weight: normal;
padding-top: 15px;
padding-bottom: 15px;
width: ${props => (props.ssize > 1250) ? '80%;' : '100%'}
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
            Work Experience
        </Title>
            <InfoContainer ssize={screenSize}>
                <Grid>
                    <Cell col={12}>
                    <CompName ssize={screenSize}>
                        <img src={Logo} alt="canvass logo"/>
                        Canvass Analytics
                    </CompName>
                    </Cell>
                    <Cell col={12}>
                        <div>
                            <img src={Canvass} width="95%" alt="canvass team"/>
                        </div>
                    </Cell>
                    <Cell col={12}>
                    <CompDiscContainer ssize={screenSize}>
                        <CompDiscTitle ssize={screenSize}>
                            What is Canvass?
                        </CompDiscTitle>
            
                        <CompDisc ssize={screenSize}>
                            Canvass is an industrial IoT based platform solution
                            that is a global leader in industrial AI located at the
                            heart of downtown Toronto. The platform accelerates
                            mission-critical decision making to minimize energy
                            consumption, Increase throughput, reduce downtime and
                            extend the lifetime of a plant’s assets. Canvass has
                            been funded by Google’s Gradient venture funds and
                            Fortune 500 companies to use the platform to optimize
                            complex production processes, generate new revenue
                            streams, and reduce energy and operating costs.
                        </CompDisc>
                    </CompDiscContainer>
                    </Cell>
                    <Cell col={12}>
                        <div>
                            <img src={DevImage} width="95%" alt={"a dev coding"}/>
                            <figcaption>Photo by Jefferson Santos on Unsplash</figcaption>
                        </div>
                    </Cell>
                    <Cell col={12}>
                    <RoleTitleContainer ssize={screenSize}> 
                        What was my role ?

                    <RoleDisc ssize={screenSize}>
                        My job as a Software Engineer intern was to work
                        on the front end of the Canvass AI/ML platform, performing
                        tasks like optimizing user experience, reducing time and effort it
                        would take the user to complete a task and add game changing algorithm
                        to increase speed and usability of the platform. The position consisted
                        of building new components and bridge the connection of client and server
                        for features implementations, participating in Scrum
                        and taking on demo’s. As an intern, being able to
                        participating in design meetings, team demo’s, socials and
                        scrum as a whole has provided me with the confidence and
                        powered my passion even more to pursue this amazing field
                        of software. There were many needed skills for this position,
                        such as the knowledge in ReactJS and Redux, RxJS and other frameworks/ libraries,
                        and soft skills including communications, decision making, time
                        management, Adaptability and the Ability to work under
                        pressure. I was lucky to be able to expand on my skills
                        on the job as a part of the team be be able grow my personality thanks to my team members.
                    </RoleDisc>
                    </RoleTitleContainer>
                    </Cell>
                </Grid>
            </InfoContainer>
        </div>
    )
    }
}
export default WorkExp;