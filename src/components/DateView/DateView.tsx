import React from 'react';
import prepareDate from '../../utils/prepareDate';
import './styles.scss';

interface IDateViewParams {
  date: string;
}

const DateView: React.FC<IDateViewParams> = ({ date }) => {
  const { day, month } = prepareDate(date);

  return (
    <p className="news__date">
      <span className="news__day">{day}</span> /{' '}
      <span className="news__month">{month}</span>
    </p>
  );
};

export default DateView;
