import React, { useState } from 'react'
import backendURL from '../../backendURLs.js'
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button' 



const Form=(props)=>{

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [number,setNumber]=useState();
    const [amount,setAmount]=useState();

    const [showIt, setShow] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleClose = () => {setShow(false); window.location.reload()};
    const handleShow = () => setShow(true)
    
    const handleAlertClose = () => {setAlert(false)};
    const handleAlertOpen = () => setAlert(true)

    const handleNameChange=(event)=> {
       setName(event.target.value);
    }
    const handleEmailChange=(event)=> {
       setEmail(event.target.value);
    }
    const handlePhoneChange=(event)=> {
        setNumber(event.target.value)
    }
    const handleAmountChange=(event)=> {
        event.preventDefault();
        setAmount(event.target.value);
    }

    const PopUpAccepted =()=>{
        return(
            <Modal
            show={showIt}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <ModalHeader closeButton>
              <ModalTitle>Donation Accepted!</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Your donation has been accepted. Thank you for your contribution!
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={handleClose}>
                Ok
              </Button>
              {/* <Button variant="primary">Ok</Button> */}
            </ModalFooter>
          </Modal> 
        )
    }
    const PopUpAlert =()=>{
        return(
            <Modal
            show={alert}
            onHide={handleAlertClose}
            backdrop="static"
            keyboard={false}
          >
            <ModalHeader closeButton>
              <ModalTitle>Incomplete Field</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Please make sure to include a donation amount.
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={handleAlertClose}>
                Ok
              </Button>
              {/* <Button variant="primary">Ok</Button> */}
            </ModalFooter>
          </Modal> 
        )
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
        if(amount!==undefined){
            console.log('amount is ' + amount);
            const postURL = `${backendURL}/donations`
            fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                amount:amount,
                email:email,
                number:number
            })
            })
            .then(handleShow())
        } else {
        console.log('amount is ' + amount);
        
        event.preventDefault();
        handleAlertOpen();
        }
    }

  
    return (
    <div className={props.isMobile? "card-mobile":"card"} id="donate">
        <div className="spaceDonate">
            <h2>Donate</h2>
        </div>
        <PopUpAccepted></PopUpAccepted>
        <PopUpAlert></PopUpAlert>

        <form className="formComponents" onSubmit={handleSubmit} >
            

            <div className="spaceDonate">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={handleNameChange} type="text" id="name" name="user_name" required></input>
            </div>
            <div className="spaceDonate">
                <label htmlFor="mail">E-mail</label>
                <input value={email} onChange={handleEmailChange} type="email" id="mail" name="user_email" required></input>
            </div>
            <div className="spaceDonate">
                <label htmlFor="number">Phone Number</label>
                <input value={number} onChange={handlePhoneChange} type="number" id="number" name="user_enumber" required></input>
            </div>

            <label>Amount  </label>
            <p className="smallerText">Choose a custom or preset amount below</p>
            <div className="">
                <div >

                    
                    <button className="donationAmounts" onClick={handleAmountChange} value="25"   name="amount">£25</button>  

                    <button className="donationAmounts" onClick={handleAmountChange} value="50"   name="amount">£50</button>
            
                    <button className="donationAmounts" onClick={handleAmountChange} value="75"   name="amount">£75</button>
 
                    <button className="donationAmounts" onClick={handleAmountChange} value="100"   name="amount">£100</button>
                    <br>
                    </br>
                    
                    <div className="donationAmounts otherAmount">
                        £<input className="inputLine"  value={amount} onChange={handleAmountChange} type="number"  min="0" name="numAmount" />
                    </div>


                    </div>
            </div>
            <button id= "submit" type="submit">Submit</button>

        </form>

    </div>
    )
}

export default Form


