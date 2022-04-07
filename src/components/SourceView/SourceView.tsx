import React from 'react';
import './styles.scss';

interface ISourceViewParams {
  link: string;
}

const SourceView: React.FC<ISourceViewParams> = ({ link }) => (
  <a href={`https://${link}`} target="_blank" className="source">
    {link}
  </a>
);

export default SourceView;
