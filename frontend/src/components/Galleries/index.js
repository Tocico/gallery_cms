import React from "react";
import Card from "../Card";

const Galleries = ({ galleries }) => {
  const leftGalleriesCount = Math.ceil(galleries.length / 5);
  const leftGalleries = galleries.slice(0, leftGalleriesCount);
  const rightGalleries = galleries.slice(leftGalleriesCount, galleries.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid>
        <div>
          {leftGalleries.map((gallery, i) => {
            return <Card gallery={gallery} key={`gallery__${gallery.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightGalleries.map((gallery, i) => {
              return <Card gallery={gallery} key={`gallery__${gallery.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries