import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

export default function App(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
