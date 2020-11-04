import React from 'react';
import styled from 'styled-components';


const StyledEduContainer = styled.div`
margin: auto;
width: 80%;
background: #fff;
padding: 40px;
border: 1px solid rgba(0, 0, 0, 0.1);
box - shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const AboutMe = () => {

    return(
        <StyledEduContainer>
        <h5>
          Who am I?
        </h5>
        <ul>
          I am a 4rth Year Student at the Unversity of Guelph, studying Software Engineering in the Bachelor of Computing.
          <br/>
        </ul>

        <h5>
          Hobbies
        </h5>
        

        </StyledEduContainer>
    );
}



export default AboutMe;
