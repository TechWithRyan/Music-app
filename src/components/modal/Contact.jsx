import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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

    <form ref={form} onSubmit={sendEmail} className="box">
      <label>Namn</label>
      <input type="text" name="name" className="input" />
      <label>E-post</label>
      <input type="email" name="email" className="input"/>
      <label>Företag</label>
      <input type="text" name="foretag" className="input"/>
      <label>Meddelande</label>
      <textarea name="message" className="textarea"/>
      <br />
      <input type="submit" value="Send" className="button is-primary"/>

      <div>{message ? <Msg /> : null }</div>
    </form>

  );
};

export default Contact;