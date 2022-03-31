import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './styles.scss';

const NewsList = ({ list }) => (
  <ul className="news">
    {list.map((news) => {
      return <NewsItem item={news} key={news._id} />;
    })}
  </ul>
);

export default NewsList;
