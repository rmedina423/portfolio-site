import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../src/js/components/Header';

describe('Header Component', function () {
  beforeEach(() => {
    this.header = shallow(<Header />);
  });

  test('should match snapshot', () => {
    expect(this.header.getElement()).toMatchSnapshot();
  });
});