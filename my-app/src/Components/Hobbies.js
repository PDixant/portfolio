import React, {Component} from 'react';
import styled from 'styled-components';
import Night from '../images/night.jpg';
import Road from '../images/road.jpg';
import Space from '../images/space2.png';

const HobbyContainer = styled.div`
font-size: 50px;
font-weight: bold;
text-align: center;
color: #ECEFF1;
padding-top: 100px;
padding-bottom: 50px;
`
const ImageContainer = styled.div`
text-align: center;
padding-left: 25%;
width: 50%;
height: 250px;
display: inline-block;
`;

class Hobbies extends Component {
    constructor(props){
        super(props);
        this.state = {
            screenSize : window.innerWidth
        }
    }

    render(){
        const {
            screenSize
        } = this.state;
        return(
            <div>
            <HobbyContainer ssize={screenSize}>
                What I do on my free time!
            </HobbyContainer>
            </div>
        )
    }
}


export default Hobbies;