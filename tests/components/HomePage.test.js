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

  test('on Masonry `onLayoutComplete`, state.layoutHidden is set to false if not already set to false', () => {
    const onLayoutComplete = this.homePage.find('MasonryComponent').prop('onLayoutComplete');
    expect(this.homePage.state('layoutHidden')).toEqual(true);
    onLayoutComplete();
    expect(this.homePage.state('layoutHidden')).toEqual(false);
  });

  test('on Masonry `onLayoutComplete`, state.layoutHidden is not set if already set to false', () => {
    this.homePage.setState({ layoutHidden: false });
    const onLayoutComplete = this.homePage.find('MasonryComponent').prop('onLayoutComplete');
    expect(this.homePage.state('layoutHidden')).toEqual(false);
    onLayoutComplete();
    expect(this.homePage.state('layoutHidden')).toEqual(false);
  });
});