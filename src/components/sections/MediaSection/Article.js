import React from 'react';

// image, text, link

const Article = (props) => (
  <div className="media-section-article">
    <a className="media-section-article-link" href={props.link} target="_blank">
      <img src={props.image} alt="" className="media-section-article-image" />
    </a>
  </div>
);

export default Article;
