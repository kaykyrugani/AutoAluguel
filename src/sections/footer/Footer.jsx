import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { FaMapMarkedAlt, FaRegClock } from "react-icons/fa";

// If you don't have a logo yet, we'll use a text placeholder
// When you have a logo, uncomment the next line and provide the correct path
// import Logo from '../../assets/logo.png';

const socialLinks = [
  { icon: <FaFacebookF className="icon" />, url: "#" },
  { icon: <FaLinkedinIn className="icon" />, url: "#" },
  { icon: <FaWhatsapp className="icon" />, url: "#" },
  { icon: <FaInstagram className="icon" />, url: "#" },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div className='footerInfo'>
          <div className='footerRow'>
            <div className='footerInfoItem'>
              <FaMapMarkedAlt className='iconImg' />
              <span>Franca – SP</span>
            </div>
            <div className='footerInfoItem'>
              <span>Endereço: Rua Rita Rocha Vieira, 760, São José.</span>
            </div>
          </div>
          <div className='footerRow'>
            <div className='footerInfoItem'>
              <FaRegClock className='iconImg' />
              <span>Segunda a sexta : 09:00 às 18:00</span>
            </div>
          </div>
          <div className='footerRow'>
            <div className='footerInfoItem'>
              <FaPhone className='iconImg' />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </div>
        <div className='footerLogo'>
          {/* Replace the image with a text placeholder until you have a logo */}
          <div className='footerLogoImg' style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Auto Aluguel
          </div>
          <div className='footerSocial'>
            {socialLinks.map(({ icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
