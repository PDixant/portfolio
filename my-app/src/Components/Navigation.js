
import React, { Component } from 'react';
import styled from "styled-components";
import {Tabs, Tab} from "react-mdl";
import AboutMe from "./AboutMe"
import Projects from './Projects';
import ContactMe from './ContactMe';

const MyContainer  = styled.div`
border: solid black 2px;
margin: auto;
margin-top: 1%;
width: 90%;
height: 100%;
`
const PageLayout = styled.div`
width: '100%';
margin: 'auto';
overflow-y: 'scroll';
`;

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
        };
    }
    render(){
        const {
            activeTab
        } = this.state
        return(
            <PageLayout>
                <div className="demo-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>About Me</Tab>
                        <Tab>Projects</Tab>
                        <Tab>Contact Me</Tab>
                    </Tabs>
                </div>

            {activeTab === 0 && (
            <MyContainer>
                <div>
                    <AboutMe/>
                </div>
            </MyContainer>
            )}
            {
                activeTab === 1 && (
                    <MyContainer>
                        <div>
                            <h3>
                                Projects
                            </h3>
                            <Projects/>
                        </div>
                    </MyContainer>
                )
            }
                {
                    activeTab === 2 && (
                        <MyContainer>
                            <div>
                                <h3>
                                    Contact Me
                                </h3>
                            <ContactMe/>
                            </div>
                        </MyContainer>
                    )
                }
            </PageLayout>
        )
    }
}

export default Navigation;
