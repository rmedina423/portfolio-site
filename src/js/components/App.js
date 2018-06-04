import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function App(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
