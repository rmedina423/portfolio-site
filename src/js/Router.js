import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import App from './components/App';
import HomePage from './components/HomePage';

const basename = process.env.NODE_ENV === 'production' ? '/portfolio-site' : '/';

export default function Router() {
  return (
    <BrowserRouter {...{ basename }}>
      <Route 
        render={({ location }) => (
          <App>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={200}>
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/coming-soon" component={ComingSoonPage} />
                  </Switch>
              </CSSTransition>
            </TransitionGroup>
          </App>
        )}
      />
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