import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import satImg from "../assets/satellite.svg";
export default function Contact() {
  const [conf, setConf] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_icz1ddo",
        "template_7a5pr0b",
        form.current,
        "iGBBLTpvkK4KkB8XI"
      )
      .then(
        (res) => {
          if (res.text == "OK") {
            setConf(true);
            setTimeout(() => {
              setConf(false);
            }, 5000);
          }
          console.log(res.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <div id="contact" className="contact-container">
        <div className="sat-container">
          <img src={satImg} alt="" />
        </div>
        <div className="form-container">
          <div className="form-1">
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
                <label className="label_name">Name</label>
                <input
                  className="user_name"
                  type="text"
                  name="user_name"
                  autoComplete="off"
                />
              </div>
              <div className="input-box">
                <label className="label_email">Email</label>
                <input className="user_email" type="email" name="user_email" />
              </div>
              <div className="message-box">
                <label className="label_message">Message</label>
                <textarea name="message" />
              </div>
              <div className="button-box">
                <input className="submitbtn" type="submit" value="Send" />
              </div>
              <div className="confirmation-box">
                {conf && <p>Your message was sent succesfully!</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
