import React, { useState, useEffect } from 'react';
import routeNewsList from './routes';
import PageTitle from '../../components/PageTitle/PageTitle';
import NewsList from '../../components/NewsList/NewsList';
import Loader from '../../components/Loader/Loader';
import getNews from '../../services/getNews';

import { INewsDetail } from 'types/INewsDetail';

const NewsListPage = () => {
  const [newsList, setNewsList] = useState<INewsDetail[]>([]);

  useEffect(() => {
    getNews().then((response) => {
      setNewsList(response.data.articles);
    });
  }, []);

  return (
    <section className="newslist-page">
      <PageTitle
        title={
          <>
            Be on <br /> the wave <span>of events</span>
          </>
        }
      />
      {newsList.length > 0 ? <NewsList list={newsList} /> : <Loader />}
    </section>
  );
};

export { routeNewsList };

export default NewsListPage;
