import React from 'react';
import { mount } from 'enzyme';
import * as rrd from 'react-router-dom';
import { StaticRouter } from 'react-router';
import Router from '../src/js/Router';
import HomePage from '../src/js/components/HomePage';
import ComingSoonPage from '../src/js/components/ComingSoonPage';

describe('Router Component', function() {
  const _BrowserRouter = rrd.BrowserRouter;

  beforeEach(() => {
    rrd.BrowserRouter = ({ children }) => <div>{children}</div>; // eslint-disable-line

    this.router = pathname => mount( // eslint-disable-line
      <StaticRouter
        location={pathname}
        context={{}}
      >
        <Router />
      </StaticRouter>);
  });

  afterAll(() => {
    rrd.BrowserRouter = _BrowserRouter;
  });

  test('/ route should render HomePage component', () => {
    const homePathRender = this.router('/').find({ path: '/' });
    expect(homePathRender.props().component).toBe(HomePage);
  });

  test('/coming-soon route should render ComingSoonPage component', () => {
    const comingSoonPathRender = this.router('/coming-soon').find({
      path: '/coming-soon'
    });
    expect(comingSoonPathRender.props().component).toBe(ComingSoonPage);
  });
});
