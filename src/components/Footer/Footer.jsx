import React from 'react';
import FooterNav from './FooterNav';
import FooterContact from './FooterContact';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <img src="/fullLogo.svg" alt="" className="w-[300px] lg:w-[400px]" />
        <div className="w-full md:w-fit flex md:gap-x-6 justify-around">
          <FooterNav />
          <FooterContact />
        </div>
      </div>
      <div className="footer-range">
        <p>Copyright © {year} ArqEstilo,</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
