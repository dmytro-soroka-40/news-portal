import React, { useState, useEffect } from 'react';
import routeMain from './routes';
import { useParams } from 'react-router-dom';

import getNews from '../../services/getNews';

import './styles.scss';
import DateView from '../../components/DateView/DateView';

const NewsDetailPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews().then((response) => {
      setNews(response.data.articles.find((item) => item._id === id));
    });
  }, [id]);

  return (
    <section className="newsDetailPage">
      {news ? (
        <div className="newsDetailWrapper">
          <div className="leftPart">
            <h1 className="title">{news.title}</h1>
            <p className="source">{news.clean_url}</p>
            <DateView date={news.published_date} />
          </div>
          <div className="rightPart">
            <img src={news.media} alt={news.title} />
            <p className="summary">{news.summary}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export { routeMain };

export default NewsDetailPage;
