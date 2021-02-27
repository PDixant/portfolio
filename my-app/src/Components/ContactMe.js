import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Textfield } from 'react-mdl';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

const StyledDivContainer = styled.div`
  margin: auto;
  width: auto;
  max-width:400px;
  background: #fff;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`

const Input = styled.input.attrs({ type: 'submit' })`
  background: #00aec9;
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
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`

// const ContactMe = () => {

class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialog: false
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
            openDialog: false
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
        e.target.reset()
        this.handleOpenDialog()
        
    }

    render(){
        
    return(
        <div>
            <div>
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
            <StyledDivContainer>
            <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <Textfield
                                type = "text"
                                label="Name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textfield
                                type = "email"
                                label="Email Address"
                                name="email"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textfield
                                type="text"
                                label="Subject"
                                name="subject"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textfield
                                type="text"
                                rows={8}
                                label="Message"
                                name="message"
                                required
                            />
                        </div>
                        <div className="col-8 pt-3 mx-auto">
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