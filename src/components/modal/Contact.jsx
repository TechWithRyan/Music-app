import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
  const [message, showMessage] = useState(false);
  const form = useRef();
  const Msg = () => {
    return <div>
      Meddelande skickat!
    </div>
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pmhi1d8', 'contact_form', form.current, '5W1Y5ag_ec8NtBokO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showMessage(true);
  };

  return (
    <div className="box">
      <div className="box-container">
      <div className="contact-box">
        <h1 className='title is-5'>Kontakt</h1>

      </div>
      <form ref={form} onSubmit={sendEmail} className="name-box">
        <label>Namn</label>
        <input type="text" name="name" className="input" />
        <label>E-post</label>
        <input type="email" name="email" className="input" />
        <label>Företag</label>
        <input type="text" name="foretag" className="input" />
        <label>Meddelande</label>
        <textarea name="message" className="textarea" />
        <br />
        <input type="submit" value="Skicka" className="button is-primary" />
        <div>{message ? <Msg /> : null}</div>
      </form>
      
      </div>
    </div>


  );
};

export default Contact;