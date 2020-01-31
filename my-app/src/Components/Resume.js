import React, { Component } from 'react';
import styled from "styled-components";
import {Tabs, Tab} from "react-mdl";

const MyContainer  = styled.div`
border: solid black 2px;
margin: auto;
margin-top: 1%;
width: 70%;
height: 20%;
`

class Resume extends Component {
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
            <div>
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
                    <h3>
                        About me
                    </h3>
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
                            </div>
                        </MyContainer>
                    )
                }
            </div>
        )
    }
}

export default Resume;