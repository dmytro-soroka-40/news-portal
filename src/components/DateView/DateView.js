import React from 'react';

import prepareDate from '../../utils/prepareDate';

import './styles.scss';

const DateView = ({ date }) => {
  const { day, month } = prepareDate(date);
  return (
    <p className="dateView">
      <span className="day">{day}</span> /{' '}
      <span className="month">{month}</span>
    </p>
  );
};

export default DateView;
