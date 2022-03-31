import React, { useState, useEffect } from 'react';
import routeMain from './routes';
import PageTitle from '../../components/PageTitle/PageTitle';

import NewsList from '../../components/NewsList/NewsList';

import getNews from '../../services/getNews';

import './styles.scss';

const NewsListPage = () => {
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
            Будь <br /> на хвилі <span>подій</span>
          </h2>
        }
      />
      {newsList.length > 0 && <NewsList list={newsList} />}
    </section>
  );
};

export { routeMain };

export default NewsListPage;
