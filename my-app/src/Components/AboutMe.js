import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Download } from '@styled-icons/feather/Download';
import Resume from '../Assets/DixantPatelResume.pdf';

const StyledEduContainer = styled.div`
margin: auto;
0
background: #fff;
padding: 40px;
border: 1px solid rgba(0, 0, 0, 0.1);
box - shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const StyledTitle = styled.div`
font-weight: Bold;
font-family: Courier New, serifS;
font-size: 90%;

`

const StyledDownloadBttn = styled(Download)`
height: 30px;
width 35px;
padding-left: 15px;
`;
const AboutMe = () => {

    return(
      <StyledEduContainer>
        <StyledTitle>
          Download Resume here    
        <Link to={Resume} target="_blank" download="DixantPatelResume.pdf">
          <StyledDownloadBttn />
          </Link>
        </StyledTitle>
          
        {/* <h5>
          Who am I?
        </h5>
        <ul>
          I am a 4th Year Student at the Unversity of Guelph, studying Software Engineering in the Bachelor of Computing.
          <br/>
        </ul>

        <h5>
          Experience
        </h5> */}
        
        

        </StyledEduContainer>
    );
}



export default AboutMe;
