import React from 'react';

import { NavLink } from 'react-router-dom';

import { routeMain as routeNewsDetail } from '../../pages/NewsDetailPage/NewsDetailPage';

import DateView from '../DateView/DateView';

import './styles.scss';

const NewsItem = ({ item }) => (
  <NavLink className="newsItem" to={routeNewsDetail(item._id)}>
    <h3 className="title">{item.title}</h3>
    <div className="bottomWrapper">
      <p className="source">{item.clean_url}</p>
      <DateView date={item.published_date} />
    </div>
  </NavLink>
);

export default NewsItem;
