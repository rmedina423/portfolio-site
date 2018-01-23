import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/js/components/App';
import HomePage from '../../src/js/components/HomePage';
import Header from '../../src/js/components/Header';
import Footer from '../../src/js/components/Footer';

describe('App Component', function () {
  beforeEach(() => {
    this.app = shallow(<App>{<HomePage />}</App>);
  });

  test('renders a HomePage', () => {
    expect(this.app.contains(<HomePage />)).toBe(true);
  });

  test('renders a Header', () => {
    expect(this.app.contains(<Header />)).toBe(true);
  });

  test('renders a Footer', () => {
    expect(this.app.contains(<Footer />)).toBe(true);
  });
});