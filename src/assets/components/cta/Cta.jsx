import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp
import './Cta.css';

const Cta = ({ text, size = 'medium', link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta ${size}`}
    >
      <FaWhatsapp className="cta-icon-whatsapp" />
      {text}
    </a>
  );
};

export default Cta;
