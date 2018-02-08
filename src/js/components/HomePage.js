import React from 'react';
import uuidv1 from 'uuid/v1';
import chunk from 'lodash.chunk';
import Tile from './Tile';
import collectionOfPhotos from '../collectionOfPhotos';

export default function HomePage() {
  const numberOfColumns = getNumberOfColumns(window.innerWidth);
  const collectionSets = getCollectionSets(collectionOfPhotos, numberOfColumns);

  return (
    <div className="tile-container">
      {[...Array(numberOfColumns)].map((_, i) => (
        <div className="tile-column" key={uuidv1()}>
          {collectionSets[i].map(collectionProps => (
            <Tile {...collectionProps} key={collectionProps.title} />
          ))}
        </div>
      ))}
    </div>
  );
}

function getCollectionSets(collection, numberOfColumns) {
  const numberOfTilesPerColumn = Math.floor(collection.length / numberOfColumns);
  const collectionSets = chunk(collection, numberOfTilesPerColumn);
  return distributeExcessCollection(collectionSets, numberOfColumns);
}

function distributeExcessCollection(collectionSets, numberOfColumns) {
  if (collectionSets.length !== numberOfColumns) {
    const excessCollection = collectionSets
      .splice(numberOfColumns, collectionSets.length - numberOfColumns)
      .reduce((a, b) => a.concat(b), []);

    excessCollection.forEach((collection, i) => {
      collectionSets[i].push(collection);
    });
  }

  return collectionSets;
}

function getNumberOfColumns(windowInnerWidth) {
  if (windowInnerWidth >= 1515) return 6;
  if (windowInnerWidth >= 1265) return 5;
  if (windowInnerWidth >= 1015) return 4;
  if (windowInnerWidth >= 765) return 3;
  if (windowInnerWidth >= 515) return 2;
  if (windowInnerWidth >= 0) return 1;
}
