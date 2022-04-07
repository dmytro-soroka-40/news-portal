import React from 'react';
import './styles.scss';

interface IPageTitleParams {
  title: JSX.Element | string;
}

const PageTitle: React.FC<IPageTitleParams> = ({ title }) => (
  <h1 className="title">{title}</h1>
);

export default PageTitle;
