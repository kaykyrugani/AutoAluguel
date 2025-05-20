import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Cta.css';

const Cta = ({ 
  text, 
  size = 'medium', 
  link, 
  onClick, 
  loading = false,
  disabled = false,
  ariaLabel
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta ${size} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel || `Botão ${text}`}
      aria-busy={loading}
      disabled={disabled}
    >
      <FaWhatsapp 
        className="cta-icon-whatsapp" 
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }} 
      />
      <span className="cta-text">{text}</span>
    </a>
  );
};

export default Cta;
