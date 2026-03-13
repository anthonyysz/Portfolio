import React from 'react'
import '../style/Contact.css'

const Contact = () => {
  return (
    <div name='contact' className='contact-screen'>
        <form method='POST' action="https://getform.io/f/ca2a461a-5f79-45f2-a393-86ad800a3e97" className='contact-form'>
            <div className='contact-titlebox'>
                <p className='contact-title'>Contact</p>
                <p className='contact-subtitle'>Submit the form below or send me an email at anthony_szabo@hotmail.com</p>
            </div>
            <input className='contact-name-input' type="text" placeholder='Name' name='name'></input>
            <input className='contact-email-input' type="email" placeholder='Email' name='email'></input>
            <textarea className='contact-message-input' name='message' rows='10' placeholder='Message'></textarea>
            <button className='form-submit'>Let's Talk!</button>
        </form>
    </div>
  )
}

export default Contact