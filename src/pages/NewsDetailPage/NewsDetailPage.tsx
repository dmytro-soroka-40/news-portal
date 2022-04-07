import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import routeDetail from './routes';
import DateView from '../../components/DateView/DateView';
import Loader from '../../components/Loader/Loader';
import getNews from '../../services/getNews';
import './styles.scss';
import SourceView from '../../components/SourceView/SourceView';

import { Iid } from 'types/IID';
import { INewsDetail } from 'types/INewsDetail';

const NewsDetailPage = () => {
  const { id } = useParams<Iid>();
  const [news, setNews] = useState<INewsDetail | null>(null);

  useEffect(() => {
    getNews().then((response) => {
      const currentNews = response.data.articles?.find(
        (item: INewsDetail) => item._id === id
      );
      setNews(currentNews);
    });
  }, [id]);

  return (
    <section className="newsDetail-page">
      {news ? (
        <div className="newsDetail__wrapper">
          <div className="newsDetail__left">
            <h1 className="newsDetail__title">{news.title}</h1>
            <div className="newsDetail__info">
              <SourceView link={news.clean_url} />
              <DateView date={news.published_date} />
            </div>
          </div>
          <div className="newsDetail__right">
            <img
              src={news.media}
              className="newsDetail__img"
              alt={news.title}
            />
            <p className="newsDetail__text">{news.summary}</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export { routeDetail };

export default NewsDetailPage;
