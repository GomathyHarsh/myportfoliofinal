import "./FormStyle.css";
import emailjs from 'emailjs-com';

import React from 'react'

const Form = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_9icnq36','template_avy142d',e.target,'zmovdjrqo9WTSRo7_').then(res=>{
      console.log(res);
      alert("Email has been sent successfully")
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="form" > 
    <form onSubmit={sendEmail}>
       <label>Your Name</label>
       <input type="text" name="name"></input>
       <label>Email</label>
       <input type="email" name="user_email"></input>
       <label>Subject</label>
       <input type="text" name='subject'></input>
       <label>Message</label>
       <textarea rows="6" name="message" placeholder="Type your message here" />
       <input type="submit" value="Send" className="btn"></input>

    </form>
      
    </div>
  )
}

export default Form
