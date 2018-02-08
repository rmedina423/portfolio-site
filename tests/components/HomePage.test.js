import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../../src/js/components/HomePage';

describe('HomePage Component', function () {
  beforeEach(() => {
    this.homePage = shallow(<HomePage />);
  });

  test('should match snapshot', () => {
    expect(this.homePage.getElement()).toMatchSnapshot();
  });
});