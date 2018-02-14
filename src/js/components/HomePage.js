import React from 'react';
import Masonry from 'react-masonry-component';
import Tile from './Tile';
import collectionOfPhotos from '../collectionOfPhotos';

export default function HomePage() {
  const { innerWidth } = window;
  const numberOfColumns = getNumberOfColumns(innerWidth);
  let tileWidth;

  if (innerWidth >= 515) {
    tileWidth = ((innerWidth - 6) / numberOfColumns) - 4;
  } else {
    tileWidth = innerWidth / numberOfColumns;
  }

  return (
    <div className="tile-container">
      <Masonry>
        {collectionOfPhotos.map(collectionProps => (
          <Tile
            {...collectionProps}
            tileWidth={`${tileWidth}px`}
            key={collectionProps.title}
          />
        ))}
      </Masonry>
    </div>
  );
}

function getNumberOfColumns(windowInnerWidth) {
  if (windowInnerWidth >= 1515) return 6;
  if (windowInnerWidth >= 1265) return 5;
  if (windowInnerWidth >= 1015) return 4;
  if (windowInnerWidth >= 765) return 3;
  if (windowInnerWidth >= 515) return 2;
  if (windowInnerWidth >= 0) return 1;
}
