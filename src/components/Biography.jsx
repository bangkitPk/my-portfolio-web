import React from 'react';
import foto from '../assets/foto1.jpg';
import './Biography.css';

const Biography = () => {
  return (
    <div className='bio-container'>
      <img src={foto} alt="My Photo" />
      <div className="description">
        <h2>About Me</h2>
        <p>
            I have an interest in the world of web programming. Since I first learned about coding, I realized how fascinating it is to build web applications that can be accessed by people from all over the world. <br /><br />
            Every day, I am increasingly motivated to continue learning and deepening my knowledge in web programming. I believe that by honing my hard skills in web technologies such as HTML, CSS, JavaScript, and modern frameworks, I will be able to create amazing and innovative digital experiences.
        </p>
      </div>
      <div className="personal-info">
        <h3>PERSONAL INFO</h3>
        <ul>
            <li>Name: <span>Bangkit Putra Kristana</span></li>
            <li>Email: <span>bangkitputrakristana@gmail.com</span></li>
            <li>Instagram: <a href="https://instagram.com/bangkit_kris?igshid=ZDc4ODBmNjlmNQ=="><span>bangkit_kris</span></a></li>
            <li>GitHub: <a href="https://github.com/bangkitPk">bangkitPk</a></li>
            <li>Linkedin: <a href="www.linkedin.com/in/bangkit-putra-kristana-207457201">www.linkedin.com/in/bangkit-putra-kristana-207457201</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Biography;
