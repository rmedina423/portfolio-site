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

  test('changes state when .mobile-menu-block gets clicked', () => {
    expect(this.header.state('isMenuIconOpen')).toEqual(false);
    this.header.find('.mobile-menu-block').simulate('click');
    expect(this.header.state('isMenuIconOpen')).toEqual(true);
  });

  test('changes state when .mobile-menu-block gets a keyPress equal to `Enter`', () => {
    expect(this.header.state('isMenuIconOpen')).toEqual(false);
    this.header.find('.mobile-menu-block').simulate('keyPress', { key: 'Enter' });
    expect(this.header.state('isMenuIconOpen')).toEqual(true);
  });

  test('does NOT change state when .mobile-menu-block gets a keyPress NOT equal to `Enter`', () => {
    expect(this.header.state('isMenuIconOpen')).toEqual(false);
    this.header.find('.mobile-menu-block').simulate('keyPress', { key: 'NOT Enter' });
    expect(this.header.state('isMenuIconOpen')).toEqual(false);
  });
});