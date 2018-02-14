import React from 'react';
import { shallow } from 'enzyme';

import Tile from '../../src/js/components/Tile';

describe('Tile Component', function() {
  beforeEach(() => {
    this.tile = shallow(<Tile
      link="'/another-page"
      title="The Chocolate Room1"
      imgName="ryan_pool_CO3.jpg"
      tileWidth="100px"
      />);
  });

  test('should match snapshot', () => {
    expect(this.tile.getElement()).toMatchSnapshot();
  });
});
