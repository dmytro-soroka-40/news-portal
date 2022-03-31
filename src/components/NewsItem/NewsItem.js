import React from 'react';
import { NavLink } from 'react-router-dom';
import { routeDetail } from '../../pages/NewsDetailPage/NewsDetailPage';
import DateView from '../DateView/DateView';
import SourceView from '../SourceView/SourceView';
import './styles.scss';

const NewsItem = ({ item }) => (
  <li className="news__item">
    <NavLink to={routeDetail(item._id)} className="news__title">
      {item.title}
    </NavLink>
    <div className="news__wrapper">
      <SourceView link={item.clean_url} />
      <DateView date={item.published_date} />
    </div>
  </li>
);

export default NewsItem;
