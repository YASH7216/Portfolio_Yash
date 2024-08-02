import React from 'react';
// import './ContactMe.css'; // Ensure you have this CSS file imported

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className='ctn'>Contact Me</h1>
        <h2 className="text-lg">
          Connect with me through the platforms below:
        </h2>
      </div>
      <div className="contact--cards">
        <a href="https://www.instagram.com/yash__7216/" target="_blank" rel="noopener noreferrer" className="contact--card">
          <img src="./img/instagram-logo.png" alt="Instagram" className="contact--logo" />
          <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/yash-bastawad-2b8ab3255/" target="_blank" rel="noopener noreferrer" className="contact--card">
          <img style={{width:"48.8px"}} src="./img/linkedin-logo.png" alt="LinkedIn" className="contact--logo" />
          <p>LinkedIn</p>
        </a>
        <a href="https://twitter.com/Byash7216" target="_blank" rel="noopener noreferrer" className="contact--card">
          <img src="./img/twitter-logo.png" alt="Twitter" className="contact--logo" />
          <p>Twitter</p>
        </a>
        <a href="https://gray-averil-27.tiiny.site/" target="_blank" rel="noopener noreferrer" className="contact--card">
          <img src="./img/cv-logo.png" alt="CV" className="contact--logo" />
          <p>CV</p>
        </a>
      </div>
    </section>
  );
}
