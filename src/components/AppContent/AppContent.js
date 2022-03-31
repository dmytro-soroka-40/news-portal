import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage, {
  routeMain as routeMainPage,
} from '../../pages/MainPage/MainPage';
import ContactsPage, {
  routeMain as routeContactsPage,
} from '../../pages/ContactsPage/ContactsPage';
import NewsListPage, {
  routeMain as routeNewsListPage,
} from '../../pages/NewsListPage/NewsListPage';
import NewsDetailPage, {
  routeMain as routeNewsDetailPage,
} from '../../pages/NewsDetailPage/NewsDetailPage';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './styles.scss';

const AppContent = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route exact path={routeContactsPage()} component={ContactsPage} />
          <Route exact path={routeNewsListPage()} component={NewsListPage} />
          <Route
            exact
            path={routeNewsDetailPage()}
            component={NewsDetailPage}
          />
          <Redirect
            to={{
              pathname: routeMainPage(),
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
