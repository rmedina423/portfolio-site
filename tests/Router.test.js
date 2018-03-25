import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Router from '../src/js/Router';
import HomePage from '../src/js/components/HomePage';

describe('Router Component', function () {
  // beforeEach(() => {
  //   this.router = mount(<Router />);
  // });

  beforeEach(() => {
    this.router = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Router />
      </MemoryRouter>
    );
  });

  test('/ route should render HomePage component', () => {
    // const homePathRender = this.router.find({ path: '/' });
    // expect(homePathRender.props().component).toBe(HomePage);
  });
});