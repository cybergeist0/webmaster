import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = ({ title, subtitle, buttonText, backgroundImage }) => {
  const navigate = useNavigate();
  
  const handleMenuRedirect = () => {
    navigate('./menu');
  }

  return (
    <div
      className="hero"
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat`,
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={handleMenuRedirect} className="hero-btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default Hero;
