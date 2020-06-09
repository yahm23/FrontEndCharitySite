import React, { useState } from 'react'
import backendURL from '../../backendURLs.js'


const Form = (props)=> {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [number,setNumber]=useState();
    const [message,setMessage]=useState();

   

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
        .then(            
            alert('Your message has been submitted')
        )

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
                    
                    <button id= "submit" type="submit">Submit</button>
                    
                
                </div>

            </form>

            </div>
                
    )
}

export default Form
