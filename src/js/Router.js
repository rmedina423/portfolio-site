import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/HomePage';

export default function Router() {
  return (
    <BrowserRouter basename="/portfolio-site">
      <App>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/coming-soon" component={ComingSoonPage} />
      </App>
    </BrowserRouter>
  );
}

function ComingSoonPage () {
  return (
    <div className="coming-soon-container">
      <h2>Coming Soon...</h2>
    </div>
  );
}