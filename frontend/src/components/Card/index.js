import React from "react";
import { Link } from "react-router-dom";

const Card = ({ gallery }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? gallery.image[0].url
      : process.env.REACT_APP_BACKEND_URL + gallery.image[0].url
  return (
    <Link to={`/gallery/${gallery.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={imageUrl}
            alt={gallery.image.url}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {gallery.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {gallery.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;