import React from 'react'
import "./contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from "../../assets/white-arrow.png"


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "46aa4d3b-d805-4a68-a43e-84d4f53380d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(" Form submitted successfully!");
        event.target.reset();
      } else {
        setResult(" Submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(" An error occurred. Please try again later.");
    }
  };
  return (
<div className='contact'>
  
  {/* Bloc 1 : Informations de contact */}
  <div className="contactCall">
    <h3>
      send us a message <img src={msg_icon} alt="" />
    </h3>
    <p>
      L’information est un concept de la discipline des sciences de l'information et de la communication (SIC). 
      Au sens étymologique, l'«information» est ce qui donne une forme à l'esprit
    </p>
    <ul>
      <li><img src={mail_icon} alt="" /> contact@gmail.com</li>
      <li><img src={phone_icon} alt="" /> +216 213356911</li>
      <li>
        <img src={location_icon} alt="" />
        Messachusettes avec ,ons lahmer <br />
        ma 0212235 tunis
      </li>
    </ul>
  </div>

  {/* Bloc 2 : Formulaire de contact */}
  <div className="contactCall">
    <form onSubmit={onSubmit}>
      <label>Your name</label>
      <input type="text" name='name' placeholder='Entrer your name' required />

      <label>Phone Number</label>
      <input type="text" name='phone' placeholder='Entrer your mobile number' required />

      <label>Whrite your messages here</label>
      <textarea name="message" rows="6" placeholder='entrer your message' required></textarea>

      <button type='submit' className='btn dark-btn'>
        submit now <img src={white_arrow} alt="" />
      </button>
  
    </form>
        <span>{result}</span>
  </div>

</div>

  )
}

export default Contact
