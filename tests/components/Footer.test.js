import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../src/js/components/Footer';

describe('Footer Component', function () {
  beforeEach(() => {
    this.footer = shallow(<Footer />);
  });

    test('should match snapshot', () => {
    expect(this.footer.getElement()).toMatchSnapshot();
  });
});