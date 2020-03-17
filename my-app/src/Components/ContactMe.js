import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';

// const ContactMe = () => {

class ContactMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            fName: '',
            lName: '',
            email: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    submitEmail = (e) => {
        const { email, fName, lName} = this.state;
        console.log(email, fName, lName)
        e.preventDefault();
    }


    render() {
    return(

        <div>

            <form onSubmit={(e) => this.submitEmail(e)}>
            <label>First Name </label>
            <Textfield
                onChange={ (e) => this.handleChange(e)}
                label="Type Here"
                id='fName'
                // style={{width: '200px'}}
                required
                />
            <br/>
            <label>
                Last Name </label>
            <Textfield
                onChange={(e) => this.handleChange(e)}
                id='lName'
                label="Type here"
                // style={{width: '200px'}}
                required
                />
            <br/>

            {/* Numeric textfield */}
            <label>Email </label>
            <Textfield
                onChange={(e) => this.handleChange(e)}
                id='email'
                label="Type here"
                // style={{width: '200px'}}
                required
                />
            <br/>
            <Textfield
                onChange={() => {}}
                label="Text lines..."
                rows={3}
                
            />
            <br/>
            <Button raised ripple type='submit'>
                Send
            </Button>
            </form>
        </div>
    )
}
}

export default ContactMe;