import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.throttle';
import Router from './Router';
import '../scss/styles.scss';

const render = () => {
  ReactDOM.render(<Router />, document.getElementById('app-container'));
};

window.addEventListener(
  'resize',
  throttle(render, 300, { leading: false }),
  false
);

render();
