import React from 'react';
import PropTypes from 'prop-types';

export default function Tile({ title, imgName }) {
  return (
    <div className="tile">
      <div className="tile-overlay">
        <div className="tile-title">
          <h2>{title}</h2>
        </div>
      </div>
      <img className="tile-img" src={`./images/${imgName}`} alt={title} />
    </div>
  );
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
};