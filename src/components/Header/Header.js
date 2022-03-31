import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeMain } from '../../pages/MainPage/MainPage';
import { routeContacts } from '../../pages/ContactsPage/ContactsPage';
import { routeNewsList } from '../../pages/NewsListPage/NewsListPage';
import './styles.scss';

const Header = () => (
  <header className="header">
    <NavLink to={routeMain()} className="header__logo">
      News-week
    </NavLink>
    <nav className="header__menu">
      <NavLink to={routeMain()} activeClassName={'header__active'}>
        Main
      </NavLink>
      <NavLink to={routeNewsList()} activeClassName={'header__active'}>
        News
      </NavLink>
      <NavLink to={routeContacts()} activeClassName={'header__active'}>
        Contacts
      </NavLink>
    </nav>
  </header>
);

export default Header;
