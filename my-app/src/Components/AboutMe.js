import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Download } from '@styled-icons/feather/Download';
import Resume from '../Assets/DixantPatelResume.pdf';
import { Cell, Grid} from 'react-mdl';
import WorkExp from './WorkExp.js'
const StyledEduContainer = styled.div`
margin: auto;
background: #312F2F;
padding: 40px;
`;

const StyledDownloadBttn = styled(Download)`
height: ${props => (props.ssize > 1250) ? '25px': '12px' };
width: ${props => (props.ssize > 1250) ? '25px' : '12px' };
padding-left: 5px;
`;

const IntroText = styled.div`
font-size: ${props => (props.ssize > 1250) ? '150px' : '75px' };
font-weight: bold;
padding: 2px;
text-align: right;
color: #ECEFF1;
`;
const IntroText2 = styled.div`
font-size: ${props => (props.ssize > 1250) ? '50px' : '25px' };
font-weight: bold;
text-align: left;
padding-bottom: 5px;
color: #ECEFF1;
padding-bottom: 20px
`;

const IntroText3 = styled.div`
font-size: ${props => (props.ssize > 1250) ? '20px' : '10px'}
width: ${props => (props.ssize > 1250) ? '50%' : '80%'}
text-align: left;
color: #ECEFF1;
`;

const AltTextColor = styled.span`
color: ${props => props.fcolor};
font-size: ${props => (props.ssize > 1250) ? '20px' : '10px'}
margin: 0;
padding-left: 4px;
padding-right: 4px;
`

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      screenSize: window.innerWidth
    }
  }


  render(){
    console.log(window.innerWidth);
    const {
      screenSize
    } = this.state
    return(
      <StyledEduContainer>
            <Grid>
              <Cell col={6} phone={2} tablet={4} >
              <IntroText ssize = {screenSize}>
                Hi
              </IntroText>
              </Cell>
              <Cell col={6} phone={2} tablet={3}>
              <IntroText2 ssize={screenSize}>
                Welcome to my page!
                </IntroText2>
              <IntroText3 ssize={screenSize}>
                I’m a 4th year 
                <AltTextColor fcolor="#C14953" ssize={screenSize}>
                software Engineer
                  </AltTextColor>
                with a minor in 
                <AltTextColor fcolor="#93B5C6" ssize={screenSize}>
                mathematics
                  </AltTextColor>
                at the
                Univerysity of Guelph.
                you can download my resume here
                <Link to={Resume} target="_blank" download="DixantPatelResume.pdf">
                <StyledDownloadBttn ssize={screenSize}/>
              </Link>
              </IntroText3>
              </Cell>
            </Grid>
          <WorkExp/>
        

        </StyledEduContainer>
    );
  }
}



export default AboutMe;
