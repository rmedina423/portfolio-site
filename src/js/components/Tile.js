import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Tile(props) {
  return (
    <Link to={props.link} className="tile">
      <div className="tile-overlay">
        <div className="tile-title">
          <h2>{props.title}</h2>
          <h3>— view —</h3>
        </div>
      </div>
      <img className="tile-img" src={`./images/${props.imgName}`} alt={props.title} />
    </Link>
  );
}

Tile.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
};