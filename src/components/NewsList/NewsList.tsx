import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './styles.scss';

import { INewsDetail } from 'types/INewsDetail';

interface INewsListParams {
  list: INewsDetail[];
}

const NewsList: React.FC<INewsListParams> = ({ list }) => (
  <ul className="news">
    {list.map((news: INewsDetail) => {
      return <NewsItem item={news} key={news._id} />;
    })}
  </ul>
);

export default NewsList;
