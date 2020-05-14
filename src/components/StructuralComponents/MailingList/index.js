
import React, { Component } from 'react'

export class MailingList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:''       
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        const postURL = "https://blog-back-end-green.herokuapp.com/mailing-lists/"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:this.state.email
            })
        })
        .then(()=>{
            
            alert('Your email has been submitted');
        })
        

        // event.preventDefault();
    }

    render() {
        return (
            <div className="update">
                <p className="keepUpdated" >Keep updated with our progress.</p>
                <div className="email">
                    <input value={this.state.email} onChange={this.handleEmailChange} height="100px" id="email" placeholder="Email address"></input>
                    
                    <button onClick={this.handleSubmit} className="chevronButton"><svg  height="32" fill="#B2B3B6"id="chevron-email" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg></button>
                    
                </div>
            </div>
        )
    }
}

export default MailingList

