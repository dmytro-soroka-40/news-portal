import React from 'react';
import './styles.scss';

const SourceView = ({ link }) => (
  <a href={`https://${link}`} target="_blank" className="source">
    {link}
  </a>
);

export default SourceView;
