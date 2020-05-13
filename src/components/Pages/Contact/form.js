import React, { PureComponent } from 'react'
import Wave from '../../StructuralComponents/Wave'
import BottomBanner from '../../StructuralComponents/BottomBanner'
 

class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            email:'',
            number:'',
            message:''
        };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({number: event.target.value});
    }
    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        // var enquiry = {
        //     "name":this.state.name,
        //     "email":this.state.email,
        //     "number":this.state.number,
        //     "message":this.state.message
        // }
        console.log('We are in the handle submit bitch');
        
        const postURL = "https://blog-back-end-green.herokuapp.com/contact-submissions"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                number:this.state.number,
                message:this.state.message
            })
        })
        .then(()=>{
            console.log('We are in the handle submit bitch');
            
        })
        alert('Your message has been submitted');
        

        event.preventDefault();
    }
    


    render(){
    return (
        <div>
            
            {/* <form action="https://blog-back-end-green.herokuapp.com/contact-submissions" method="post"> */}
                
                <form  onSubmit={this.handleSubmit} >
                <>
                
                    <label htmlFor="name">Name</label>
                    <br></br>
                    <input value={this.state.name} onChange={this.handleNameChange} type="text" id="name" name="user_name" required></input>
                    
                
                </>
                        <br></br>
                        <label htmlFor="mail">E-mail</label>
                        <br></br>
                        <input value={this.state.email} onChange={this.handleEmailChange} type="email" id="mail" name="user_email" required></input>
                    
                   
                
                        <br></br>
                        <label htmlFor="number">Phone Number(Optional)</label>
                        <br></br>
                        <input value={this.state.number} onChange={this.handlePhoneChange} type="text" id="number" name="user_enumber" ></input>
                    
                  
                
                        <br></br>
                        <label htmlFor="msg">Message</label>
                        <br></br>
                        <textarea value={this.state.message} onChange={this.handleMessageChange} id="msg" name="user_message" required></textarea>
                    
                    <ul className="button">
                        <button type="submit">Submit</button>
                    </ul>

            </form>

            </div>
                
    )}
}

export default Form