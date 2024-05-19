import React from 'react';
import instagram from '../images/instagram.png'
import fb from '../images/facebook.png'
const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>For repairs, WhatsApp us at: <a href="https://wa.me/919691625195" className="contact-link">+91 9691625195</a></p>
        <p>Contact us via email: <a href="mailto:fixthisservice@gmail.com" className="contact-link">fixthisservice@gmail.com</a></p>
        <p>Follow us on social media:</p>
        <div className="social-links">
  <a 
  href="https://www.instagram.com/fixthisservices?igsh=MWgybjhvamIzaWZhYg==" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
>
  <img 
    className="instagram-logo" 
    src={instagram} 
    alt="Instagram logo" 
  />
  Instagram
</a>
<a 
  href="https://www.facebook.com/share/a87urr8PMRn9ZWWM/?mibextid=qi2Omgg==" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
>
  <img 
    className="instagram-logo" 
    src={fb} 
    alt="Instagram logo" 
  />
  Facebook
</a>
    
      </div>
      </div>
    </section>
  );
};

export default Contact;
