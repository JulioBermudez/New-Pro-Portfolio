import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oj444k2', 'template_uzo28mb', form.current, 'ytzvJKy6NY88Z6Nwd')
      
    e.target.reset()
  };


  const contactOptions = [
    {
      icon: <MdOutlineEmail className="contact__option-icon" />,
      option_name: "Email",
      details: "julioph0n3@gmail.com",
      url: "mailto:julioph0n3@gmail.com",
    },
    {
      icon: <RiMessengerLine className="contact__option-icon"/>,
      option_name: "Messenger",
      details: "Julio Cesar Bermudez",
      url: "https://m.me/profile.php?id=100008852680959",
    },
    {
      icon: <BsWhatsapp className="contact__option-icon"/>,
      option_name: "WhatsApp",
      details: "+17547158059",
      url: "https://api.whatsapp.com/send?phone+17547158059",
    },
  ];

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map(({ icon, option_name, url, details }) => {
            return (
              <>
                <article className="contact__option">
                  {icon}
                  <h4>{option_name}</h4>
                  <h5>{details}</h5>
                  <a href={url} target="_blank" rel="noreferrer">
                    Send a Message
                  </a>
                </article>
              </>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
