import React from 'react';
import FooterContactItem from './FooterContactItem';
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa6';

const FooterContact = () => {
  return (
    <div className="flex flex-col items-start gap-y-1">
      <h5>Contato</h5>
      <div className="flex gap-y-1 flex-col">
        <FooterContactItem
          icon={<FaLinkedin className="footer-contact-icon" />}
          contact={'ArqEstilo'}
        />
        <FooterContactItem
          icon={<FaInstagram className="footer-contact-icon" />}
          contact={'@arq_estilo'}
        />
        <FooterContactItem
          icon={<FaEnvelope className="footer-contact-icon" />}
          contact={'arqestilo@gmail.com'}
        />
        <FooterContactItem
          icon={<FaWhatsapp className="footer-contact-icon" />}
          contact={'(021) 99999-9999'}
        />
      </div>
    </div>
  );
};

export default FooterContact;
