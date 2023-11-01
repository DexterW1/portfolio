import { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import spaceImage from '../images/spacecontact.jpg'
export default function Contact() {
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_icz1ddo','template_7a5pr0b',form.current,'iGBBLTpvkK4KkB8XI')
            .then((res)=>{
                console.log(res.text);
            }, (error)=>{
                console.log(error);
            });
    }
  return (
    <>
        <div id='contact' className="contact-container">
            <div className="form-container">
                <div className="form-1">
                    <h1>Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-box">
                            <label className='label_name'>Name</label>
                            <input className='user_name' type="text" name="user_name" autoComplete='off'/>
                        </div>
                        <div className="input-box">
                            <label className='label_email'>Email</label>
                            <input className='user_email' type="email" name="user_email" />
                        </div>
                        <div className="message-box">
                            <label className='label_message'>Message</label>
                            <textarea name="message" />
                        </div>
                        <div className="button-box">
                            <input className='submitbtn' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                {/* <div className="form-picture">
                    <img src={spaceImage} alt="" />
                </div> */}
            </div>
        </div>
    </>
  )
}
