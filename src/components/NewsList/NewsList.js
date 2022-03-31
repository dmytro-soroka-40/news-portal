import React from 'react';

import NewsItem from '../NewsItem/NewsItem';

import './styles.scss';

const NewsList = ({ list }) => (
  <div className="newsList">
    {list.map((news) => {
      return <NewsItem key={news._id} item={news} />;
    })}
  </div>
);

export default NewsList;
