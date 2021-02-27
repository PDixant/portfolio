import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Textfield } from 'react-mdl';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

const Title = styled.div`
font-size: ${props => (props.ssize > 1250) ? '40px;' : '20px;'};
font-weight: bold;
text-align: center;
color: #ECEFF1;
padding-top: 100px;
padding-bottom: 50px;
`;


const StyledDivContainer = styled.div`
  margin: auto;
  width: ${props => (props.ssize > 1250) ? '40%;' : '50%;'};
  background: #fff;
  padding: 40px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`

const Input = styled.input.attrs({ type: 'submit' })`
  background: #3b3838;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  &:active {
    background-color: #f1ac15;
  }
`

// const ContactMe = () => {

class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialog: false,
            screenSize: window.innerWidth,
            nLabel: 'Name',
            eLabel: 'Email Address',
            sLabel: 'Subject',
            mLabel: 'Message',
        };
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false,
            nLabel: 'Name',
            eLabel: 'Email Address',
            sLabel: 'Subject',
            mLabel: 'Message',
        });
    }


    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_ylqwn9z', e.target, 'user_bbmNLOKzQC0ODgqHngWct')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        this.handleOpenDialog()
        
    }

    render(){
        const {
            screenSize,
            nLabel,
            eLabel,
            sLabel,
            mLabel
        } = this.state
    return(
        <div >
            <div>
                <Title ssize={screenSize}>
                    Contact Me!
                </Title>
                <Dialog open={this.state.openDialog}>
                    <DialogTitle>Messenge sent!</DialogTitle>
                    <DialogContent>
                        <p>I will get back to you as soon as possible!</p>
                    </DialogContent>
                    <DialogActions fullWidth>
                        <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <StyledDivContainer ssize={screenSize} >
            <form onSubmit={this.sendEmail} >
                    <div align-items="center" margin="auto">
                        <div>
                            <Textfield
                                type = "text"
                                label={nLabel}
                                name="name"
                                required
                            />
                        </div>
                        <div>
                            <Textfield
                                type = "email"
                                label={eLabel}
                                name="email"
                                required
                            />
                        </div>
                        <div>
                            <Textfield
                                type="text"
                                label={sLabel}
                                name="subject"
                                required
                            />
                        </div>
                        <div>
                            <Textfield
                                type="text"
                                rows={8}
                                label={mLabel}
                                name="message"
                                required
                            />
                        </div>
                        <div>
                            <Input/>
                        </div>
                    </div>
                </form>
            </StyledDivContainer>
        </div>
    )
    }
}

export default ContactMe;