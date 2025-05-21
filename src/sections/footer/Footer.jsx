import React from 'react';
import './Footer.css';
import Logo from '../../assets/Imgs/Logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="info-icon" />,
    title: 'Endereço',
    description: 'Rua Rita Rocha Vieira, 760, São José, Franca/SP'
  },
  {
    icon: <FaPhone className="info-icon" />,
    title: 'Telefone',
    description: '(11) 99999-9999',
    link: 'tel:11999999999'
  },
  {
    icon: <FaEnvelope className="info-icon" />,
    title: 'E-mail',
    description: 'contato@autoaluguel.com.br',
    link: 'mailto:contato@autoaluguel.com.br'
  },
  {
    icon: <FaClock className="info-icon" />,
    title: 'Horário de Funcionamento',
    description: 'Segunda a Sexta: 09:00 às 18:00'
  }
];

const socialLinks = [
  { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
  { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn />, url: '#', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, url: '#', label: 'WhatsApp' },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section contact-info'>
          <h3 className='section-title'>Entre em Contato</h3>
          <div className='contact-grid'>
            {contactInfo.map((item, index) => (
              <div key={index} className='contact-item'>
                <div className='contact-icon'>{item.icon}</div>
                <div className='contact-details'>
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className='contact-link'>{item.description}</a>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className='footer-section social-section'>
          <h3 className='section-title'>Redes Sociais</h3>
          <div className='social-links'>
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className='social-link'
                target='_blank' 
                rel='noopener noreferrer'
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Auto Aluguel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
