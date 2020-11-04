import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Textfield } from 'react-mdl';

const StyledDivContainer = styled.div`
  margin: auto;
  width: 400px;
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

function ContactMe() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_ylqwn9z', e.target, 'user_bbmNLOKzQC0ODgqHngWct')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <StyledDivContainer>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <Textfield
                                type = "text"
                                label="Name"
                                name="name"
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textfield
                                type = "email"
                                label="Email Address"
                                name="email"
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textfield
                                type="text"
                                label="Subject"
                                name="subject"
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textfield
                                type="text"
                                rows = '8'
                                label="Message"
                                name="message"
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

export default ContactMe;