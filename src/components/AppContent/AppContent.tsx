import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage, { routeMain } from '../../pages/MainPage/MainPage';
import ContactsPage, {
  routeContacts,
} from '../../pages/ContactsPage/ContactsPage';
import NewsListPage, {
  routeNewsList,
} from '../../pages/NewsListPage/NewsListPage';
import NewsDetailPage, {
  routeDetail,
} from '../../pages/NewsDetailPage/NewsDetailPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './styles.scss';

const AppContent = () => (
  <div className="container">
    <Header />
    <main className="main">
      <Switch>
        <Route exact path={routeMain()} component={MainPage} />
        <Route exact path={routeContacts()} component={ContactsPage} />
        <Route exact path={routeNewsList()} component={NewsListPage} />
        <Route exact path={routeDetail()} component={NewsDetailPage} />
        <Redirect
          to={{
            pathname: routeMain(),
          }}
        />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default AppContent;
