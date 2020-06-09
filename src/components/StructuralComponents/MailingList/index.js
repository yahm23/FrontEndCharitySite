
import React, { useState } from 'react'
import backendURL from '../../backendURLs.js'
// import { useMediaQuery } from 'react-responsive';

import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

const MailingList=()=> {
    const [email,setEmail]=useState();

    const handleEmailChange= (event)=> {
        setEmail(event.target.value);
    }
    const [show, setShow] = useState(false);
  
  const handleClose = () => {setShow(false); window.location.reload()};
  const handleShow = () => setShow(true)

  const PopUp =()=>{
    return(
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <ModalTitle>Email Submitted</ModalTitle>
        </ModalHeader>
        <ModalBody>
         You have been successfully added to our mailing list!
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

    const handleSubmit=(event)=> {
        const postURL = `${backendURL}/mailing-lists/`
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email
            })
        })
        .then(handleShow())
        

        event.preventDefault();
    }


        return (
            <div className="update">
                <PopUp></PopUp>
                <p className="keepUpdated" >Keep updated with our progress.</p>
                
                <form className="email" onSubmit={handleSubmit}>
                    
                    <input value={email} onChange={handleEmailChange} height="100px" id="email" placeholder="Email address" required></input>
                    <button type="submit"  className="chevronButton"><svg  height="32" fill="#B2B3B6"id="chevron-email" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg></button>
                </form>


            </div>
        )
    
}

export default MailingList

