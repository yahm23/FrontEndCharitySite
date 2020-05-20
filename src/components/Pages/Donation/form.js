import React, { PureComponent } from 'react'



class Form extends PureComponent {

constructor(props) {
    super(props);
    this.state ={
        name:'',
        email:'',
        number:'',
        amount:''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
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
    handleAmountChange(event) {
        event.preventDefault();
        this.setState({amount: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.amount!=''){
        const postURL = "https://blog-back-end-green.herokuapp.com/donations"
        fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:this.state.name,
            amount:this.state.amount,
            email:this.state.email,
            number:this.state.number
        })
        })
        .then(()=>{
        alert('Your donation has been submitted');

        })}
        else{
            alert('Please pick an amount to donate');
            event.preventDefault();
        }
    }

    render(){
    return (
    <div className={this.props.isMobile? "card-mobile":"card"} id="donate">
        <div className="spaceDonate">
            <h2>Donate</h2>
        </div>

        <form className="formComponents" onSubmit={this.handleSubmit} >
            

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
                <input value={this.state.number} onChange={this.handlePhoneChange} type="number" id="number" name="user_enumber" required></input>
            </div>

            <label>Amount  </label>
            <p className="smallerText">Choose a custom or preset amount below</p>
            <div className="">
                <div >

                    
                    <button className="donationAmounts" onClick={this.handleAmountChange} value="25"   name="amount">£25</button>  

                    <button className="donationAmounts" onClick={this.handleAmountChange} value="50"   name="amount">£50</button>
            
                    <button className="donationAmounts" onClick={this.handleAmountChange} value="75"   name="amount">£75</button>
 
                    <button className="donationAmounts" onClick={this.handleAmountChange} value="100"   name="amount">£100</button>
                    <br>
                    </br>
                    
                    <div className="donationAmounts otherAmount">
                        £<input className="inputLine"  value={this.state.amount} onChange={this.handleAmountChange} type="number"  min="0" name="numAmount" />
                    </div>


                    </div>
            </div>
            <button id= "submit" type="submit">Submit</button>

        </form>

    </div>
    )}
}

export default Form


