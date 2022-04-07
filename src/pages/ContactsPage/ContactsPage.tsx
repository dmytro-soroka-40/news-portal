import React from 'react';
import routeContacts from './routes';
import Img from '../../assets/img/img.jpeg';
import './styles.scss';

const ContactsPage = () => (
  <section className="contacts-page">
    <div className="contacts__info">
      <a className="contacts__phone" href="tel:+380631907057">
        +38 (063) 19 07 057
      </a>
      <div className="contacts__name">
        Dmytro <br />
        Soroka
      </div>
      <a className="contacts__mail" href="mailto:dima.soroka40@gmail.com">
        dima.soroka40@gmail.com
      </a>
      <div className="contacts__position">Front-End Developer</div>
      <div className="contacts__tech">Html, Css, Js, React, Redux</div>
    </div>
    <img src={Img} className="contacts__img" alt="DmytroSoroka" />
  </section>
);

export { routeContacts };
export default ContactsPage;
