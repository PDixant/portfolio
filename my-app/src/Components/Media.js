import React from 'react';
import styled from 'styled-components'
import {Linkedin, Instagram, Github} from "styled-icons/fa-brands/";
import { Blog } from "styled-icons/fa-solid/Blog"

const MediaContainer = styled.div`
display: flex;
margin: 0 auto;
justify-content: space-evenly;
height: 100%;
width: 90%;
`;

const StyledLinkedIn = styled(Linkedin)`
height: 100%;
width: 100%;
color: white;
`
const StyledInstagram = styled(Instagram)`
height: 100%;
width: 100%;
color: white;
`

const StyledGithub = styled(Github)`
height: 100%;
width: 100%;
color: white;
`
const StyledBlog = styled(Blog)`
height: 100%;
width: 100%;
color: white;
`;

const Media = () =>  {
    return(
        <MediaContainer>
            <a href="https://www.linkedin.com/in/dixantpatel/" rel="noopener noreferrer" target="_blank">
                <StyledLinkedIn/>
            </a>
            <a href="https://www.instagram.com/_.shutter.bug/" rel="noopener noreferrer" target="_blank">
                <StyledInstagram/>
            </a>
            <a href="https://github.com/PDixant/" rel="noopener noreferrer" target="_blank">
                <StyledGithub/>
            </a>
            <a href="https://dixant.design.blog/" rel="noopener noreferrer" target="_blank">
                <StyledBlog/>
            </a>
        </MediaContainer>
    )
}

export default Media;