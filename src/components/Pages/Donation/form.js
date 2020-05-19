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
        this.setState({amount: event.target.value});
    }

    handleSubmit(event) {
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

            <label>Amount{this.state.amount}</label>
            <div className="donationAmount">
                <ul onChange={this.handleAmountChange} class="donate-now">
                    <li>
                        <input value="25" type="radio" id="a25" name="amount" />
                        <label for="a25">£25</label>
                    </li>

                    <li>
                        <input value="50" type="radio" id="a50" name="amount" />
                        <label for="a50">£50</label>
                    </li>

                    <li>
                        <input value="75" type="radio" id="a75" name="amount" />
                        <label for="a75">£75</label>
                    </li>

                    <li>
                        <input value="100" type="radio" id="a100" name="amount" />
                        <label for="a100">£100</label>
                    </li>

                    <li>
                        <input value="other" type="radio" id="other" name="amount" />
                        <label for="other">Other </label>
                    </li>

                    {this.state.amount==="75"|| this.state.amount==="50"|| this.state.amount==="100"|| this.state.amount==="25"?

                    <li>
                    </li>
                    
                    :

                    <li>
                        <input value={this.state.amount} onChange={this.handleAmountChange} type="number" id="otherAmount" min="0" name="numAmount" />
                    </li>
                    }

                </ul>
            </div>

            {/* <span class="currencyinput">£<input value={this.state.amount} onChange={this.handleMessageChange} type="number" id="amount" name="amount" required></input></span> */}



            
            <br></br>
            <br></br>
            <br></br>
            <button id= "submit" type="submit">Submit</button>

        </form>

    </div>
    )}
}

export default Form


