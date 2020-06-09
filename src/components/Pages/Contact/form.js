import React, { useState } from 'react'
import backendURL from '../../backendURLs.js'
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button' 

const Form = (props)=> {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [number,setNumber]=useState();
    const [message,setMessage]=useState();

    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); window.location.reload()};
    const handleShow = () => {setShow(true); console.log('show is'+show); 
};

    const PopUp =()=>{
        return(
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <ModalHeader closeButton>
              <ModalTitle>Enquiry Submitted!</ModalTitle>
            </ModalHeader>
            <ModalBody>
                Thank you for Submission, we will reply as soon as we can.
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

    const handleNameChange=(event)=> {
        setName(event.target.value);
     }
     const handleEmailChange=(event)=> {
        setEmail(event.target.value);
     }
     const handlePhoneChange=(event)=> {
         setNumber(event.target.value)
     }
    const handleMessageChange=(event)=> {
       setMessage(event.target.value);
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
        const postURL = `${backendURL}/contact-submissions`
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                email:email,
                number:number,
                message:message
            })
        })
        .then( ()=>{
            event.preventDefault();
            handleShow()
        })
            

}
    

    return (
        <div className={props.isMobile? "card-mobile":"card"} id="form">
            
                <div className="message">
        
                    <h2>Send us a message</h2>
                </div>

                <form className="formComponents" onSubmit={handleSubmit} >
                
                <div  >

                    <div className="space">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={handleNameChange} type="text" id="name" name="user_name" required></input>
                    </div>
                
                
                    <div className="space">
                        <label htmlFor="mail">E-mail</label>
                        <input value={email} onChange={handleEmailChange} type="email" id="mail" name="user_email" required></input>
                    </div>    
                    
                   
                
                    <div className="space">
                        <label htmlFor="number">Phone Number(Optional)</label>
                        <input value={number} onChange={handlePhoneChange} type="text" id="number" name="user_enumber" ></input>
                    </div>
                    
                  
                
                    <div className="space">
                        <label htmlFor="msg">Message</label>
                        <textarea  rows="1" cols="33" value={message} onChange={handleMessageChange} id="msg" name="user_message" required></textarea>
                    </div>
                    <PopUp></PopUp>
                    <button id= "submit" type="submit">Submit</button>
                    
                
                </div>

            </form>
                    {/* <button  onClick={handleShow}>test</button> */}

            </div>
                
    )
}

export default Form
