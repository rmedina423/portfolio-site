import React from 'react';
import { shallow } from 'enzyme';

import Router from '../src/js/Router';
import HomePage from '../src/js/components/HomePage';

describe('Router Component', function () {
  beforeEach(() => {
    this.router = shallow(<Router />);
  });

  test('/ route should render HomePage component', () => {
    const homePathRender = this.router.find({ path: '/' });
    expect(homePathRender.props().component).toBe(HomePage);
  });
});