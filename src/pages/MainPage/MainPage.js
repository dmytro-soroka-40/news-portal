import React, { useState, useEffect } from 'react';
import routeMain from './routes';
import PageTitle from '../../components/PageTitle/PageTitle';
import NewsList from '../../components/NewsList/NewsList';
import Loader from '../../components/Loader/Loader';
import getNews from '../../services/getNews';

const MainPage = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews().then((response) => {
      setNewsList(response.data.articles);
    });
  }, []);

  return (
    <section className="main-page">
      <PageTitle
        title={
          <>
            Always <br /> fresh <span>news</span>
          </>
        }
      />
      {newsList.length > 0 ? (
        <NewsList list={newsList.slice(0, 6)} />
      ) : (
        <Loader />
      )}
    </section>
  );
};

export { routeMain };

export default MainPage;
