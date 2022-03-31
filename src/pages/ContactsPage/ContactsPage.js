import React from 'react';
import routeMain from './routes';

import DmytroImg from '../../assets/img/img.jpeg';

import './styles.scss';

const ContactsPage = () => {
  return (
    <section className="contactsPage">
      <div className="info">
        <div className="phone">
          <a href="tel:+380631907057"> +38 (063) 19 07 057</a>
        </div>
        <div className="name">
          Дмитро <br />
          Сорока
        </div>
        <div className="mail">
          <a href="mailto:dima.soroka40@gmail.com">dima.soroka40@gmail.com</a>
        </div>
        <div className="position">FrontEnd Developer</div>
        <div className="tech">HTML CSS JS REACT</div>
      </div>
      <div className="img">
        <img src={DmytroImg} alt="DmytroSoroka" />
      </div>
    </section>
  );
};

export { routeMain };

export default ContactsPage;
