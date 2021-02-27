import React, {Component} from 'react';
import styled from 'styled-components';
import Beach from '../images/insta/1.JPG';
import Streets from '../images/insta/2.jpg';
import Houses from '../images/insta/3.jpg';
import CrossWalk from '../images/insta/4.jpg';
import Bridge from '../images/insta/5.jpg';
import Barks from '../images/insta/8.JPG';
import { Instagram } from "styled-icons/fa-brands/";

const HobbyContainer = styled.div`
font-size: 50px;
font-weight: bold;
text-align: center;
color: #ECEFF1;
padding-top: 100px;
margin: auto;
padding-bottom: 50px;
`
const ImageContainer = styled.div`
text-align: center;
width: ${props => (props.ssize > 1250) ? '50%;' : '90%;'}
max-height: 150px;
display: inline-block;
`;

const StyledInstagram = styled(Instagram)`
height: 25px;
width: 25px;
padding-left: 5px;
color: #ECEFF1;
`
const Content = styled.div`
padding-top: 50px;
color: #ECEFF1;
text-align: center;
font-size: ${props => props.ssize > 1250 ? '20px;' : '12px;'}
font-weight: bold;
`
const Title = styled.div`
padding-top: 50px;
color: #ECEFF1;
text-align: center;
font-size: ${props => props.ssize > 1250 ? '50px;' : '20px;'}
font-weight: bold;
`;

const Styledimg = styled.img`
height: ${props => props.ssize > 1250 ? '500px;' : '200px;'}
width: ${props => props.ssize > 1250 ? '500px;' : '300px;'}
border-radius: 12px;
`;

const StyledNav = styled.a`
line-height: 100px;
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
                <Title ssize={screenSize}>
                    What I do on my free time!
                </Title>
                <Content ssize={screenSize}>
                    I like to go out and take pictures! here are some of my work,
                    I have many more on my instagram, feel free to check it out!  
                    <a href="https://www.instagram.com/dixant_captures/" rel="noopener noreferrer" target="_blank">
                        <StyledInstagram />
                    </a>
                </Content>
            <HobbyContainer ssize={screenSize}>
                <ImageContainer ssize={screenSize} id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                    <Styledimg ssize={screenSize} src={Beach} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>From Above</h5>
                    </div>

                    </div>
                    <div className="carousel-item">
                    <Styledimg ssize={screenSize} src={Streets} className="d-block w-100" alt={'drone view of street'}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Moody Weather</h5>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <Styledimg ssize={screenSize} src={Houses} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Streets from the sky</h5>
                    </div>
                    </div>

                    <div className="carousel-item">
                        <Styledimg ssize={screenSize} src={CrossWalk} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cross Walk</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <Styledimg ssize={screenSize} src={Bridge} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>The Bridge</h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <Styledimg ssize={screenSize} src={Barks} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Behind Branches</h5>
                        </div>
                    </div>

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                </ol>
                <StyledNav className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </StyledNav>
                <StyledNav className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </StyledNav>
                </div>
                </ImageContainer>
            </HobbyContainer>
            </div>
        )
    }
}


export default Hobbies;