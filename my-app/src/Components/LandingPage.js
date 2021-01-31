import React, { Component } from 'react';
import styled from 'styled-components';
import BGimage from "../images/space2.png";
import Navigation from "./Navigation";
import Media from "./Media"

const PageLayout = styled.div`
width: 100%;

margin: auto;
overflow-y: hidden;
`;


const EmptySpace = styled.div`
height: 150px;
width: 100px;
`;


const BGImagecontainer = styled.div`
height: 350px;
background: url(${BGimage}) center / cover;
margin-top: 0px;
`;

const MediaContainer = styled.div`
height: 30px;
width: 200px;
`;
const StyledBanner = styled.div`
margin: auto;
color: #ECEFF1;
`;

const StyledName = styled.div`
padding-top: 190px;
padding-left: 10px;
padding-bottom: 20px;
font-size: 40px;
font-weight: bold;
`;


class LandingPage extends Component {
    render(){
        return(
            <PageLayout>
                    <StyledBanner>
                <BGImagecontainer>
                    <StyledName>
                        Dixant Patel
                    </StyledName>
                        <MediaContainer>
                            <Media />
                        </MediaContainer>
                </BGImagecontainer>
                     </StyledBanner>
                <Navigation/>
                <EmptySpace/>
            </PageLayout>
        )
    }
}

export default LandingPage;