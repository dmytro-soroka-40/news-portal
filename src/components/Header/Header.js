import React from 'react';

import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from '../../pages/MainPage/MainPage';
import { routeMain as routeContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { routeMain as routeNewsListPage } from '../../pages/NewsListPage/NewsListPage';

import './styles.scss';

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="title">Новинник</div>
      <nav>
        <NavLink to={routeMainPage()} activeClassName={'link-active'}>
          Головна
        </NavLink>
        <NavLink to={routeNewsListPage()} activeClassName={'link-active'}>
          Новини
        </NavLink>
        <NavLink to={routeContactsPage()} activeClassName={'link-active'}>
          Контакти
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
