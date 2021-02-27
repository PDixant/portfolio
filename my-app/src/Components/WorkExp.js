import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../images/index.png';
import { Cell, Grid } from 'react-mdl';

const Title = styled.div`
font-size: ${props => (props.ssize > 1250) ? '50px' : '35px' };
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
text-align: left;
background:#ECEFF1;
overflow: hidden;
width: 40%;
padding: 20px;
border-radius: 12px;
`;

const CompName = styled.div`
text-align: center;
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px' : '20px'}
color: #3b3838;
`;

const CompDiscTitle = styled.span`
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px' : '20px'}
padding-bottom: 30px;
`;

const CompDiscContainer = styled.div`
text-align: left;
color: #3b3838;
`;

const CompDisc = styled.p`
font-size: ${props => (props.ssize > 1250) ? '20px' : '12px'}
padding-top: 15px;
padding-bottom: 15px;
`;

const RoleTitleContainer = styled.div`
text-align: left;
font-weight: bold;
font-size: ${props => (props.ssize > 1250) ? '50px' : '20px'}
`;

const RoleDisc = styled.p`
font-size: ${props => (props.ssize > 1250) ? '20px' : '12px'}
font-weight: normal;
padding-top: 15px;
padding-bottom: 15px;
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
            <InfoContainer>
                <Grid>
                    <Cell col={12}>
                    <CompName ssize={screenSize}>
                        <img src={Logo} alt="canvass logo"/>
                        Canvass Analytics
                    </CompName>
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
                            Fortune 500 companies use the platform to optimize
                            complex production processes, generate new revenue
                            streams, and reduce energy and operating costs.
                        </CompDisc>
                    </CompDiscContainer>
                    </Cell>
                    <Cell col={12}>
                    <RoleTitleContainer ssize={screenSize}> 
                        What is my role ?

                    <RoleDisc ssize={screenSize}>
                        My job has as a Software Engineer intern was to work
                        on the front end of the Canvass AI/ML platform, performing
                        tasks like optimizing user experience. The position consisted
                        of building new components and containers for users to be
                        able to new features of the platform, participating in Scrum
                        and taking on demo’s. As an intern, being able to
                        participating in design meetings, team demo’s, socials and
                        scrum as a whole has provided me with the confidence and
                        powered my passion even more to pursue this amazing field
                        of software. There were many needed skills for this position,
                        such as the knowledge in ReactJS and JavaScript, and soft
                        skills including communications, decision making, time
                        management, Adaptability and the Ability to work under
                        pressure. I was lucky to be able to expand on my skills
                        on the job as a part of the team.
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