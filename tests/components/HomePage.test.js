import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../../src/js/components/HomePage';

describe('HomePage Component', function () {
  beforeEach(() => {
    this.homePage = shallow(<HomePage />);
  });

  test('renders HomePage', () => {
    expect(this.homePage.text()).toBe('Welcome to the Home Page');
  });
});