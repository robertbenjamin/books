import React from 'react';
import './BookItem.css';

function BookItem(props) {
  const { title, author, description, image } = props;
  const imageSrc = require(`../images/${image}`);

  const descriptionHTML = { __html: description };

  return (
    <article className="book-item">
      <div className="image-container">
        <img src={imageSrc} className="image" alt="Book cover" />
      </div>
      <div className="meta">
        <div className="name">{title}</div>—
        <div className="author">{author}</div>
      </div>
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </article>
  )
}

export default BookItem;
