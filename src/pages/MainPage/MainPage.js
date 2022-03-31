import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import routeMain from './routes';

import NewsList from '../../components/NewsList/NewsList';

import getNews from '../../services/getNews';

import './styles.scss';

const MainPage = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews().then((response) => {
      setNewsList(response.data.articles);
    });
  }, []);

  return (
    <section className="mainPage">
      <PageTitle
        title={
          <h2>
            Завжди <br /> свіжі <span>новини</span>
          </h2>
        }
      />
      {newsList.length > 0 && <NewsList list={newsList.slice(0, 6)} />}
    </section>
  );
};

export { routeMain };

export default MainPage;
