import React, { PureComponent } from 'react'



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
                message:this.state.amount
            })
        })
        .then(()=>{
            
            
            alert('Your message has been submitted');
        })
        

        // event.preventDefault();
    }
    

    
    render(){
    return (
        <div className={this.props.isMobile? "card-mobile":"card"} id="donate">
            
                <div className="spaceDonate">
                    <h2>Donate</h2>
                </div>

                <form className="formComponents" onSubmit={this.handleSubmit} >
                
                <div>

                    <div className="spaceDonate">
                        <label htmlFor="name">Name</label>
                        <input value={this.state.name} onChange={this.handleNameChange} type="text" id="name" name="user_name" required></input>
                    </div>
                
                
                    <div className="spaceDonate">
                        <label htmlFor="mail">E-mail</label>
                        <input value={this.state.email} onChange={this.handleEmailChange} type="email" id="mail" name="user_email" required></input>
                    </div>    
                    
                   
                
                    <div className="spaceDonate">
                        <label htmlFor="number">Phone Number</label>
                               
                        <input value={this.state.number} onChange={this.handlePhoneChange} type="text" id="number" name="user_enumber" required></input>
                    </div>
                    
                  
                
                    <div className="spaceDonate">

                        <label for="subdomain">Amount:</label>
                        <input type="text" id="subdomain" value="£" disabled/>
                        <input type="text" placeholder="ExampleDomain" id="subdomaintwo" />

                        {/* <span class="currencyinput">£<input value={this.state.amount} onChange={this.handleMessageChange} type="number" id="amount" name="amount" required></input></span> */}
                    </div>
                    
                    <button id= "submit" type="submit">Submit</button>
                    
                
                </div>

            </form>

            </div>
                
    )}
}

export default Form
