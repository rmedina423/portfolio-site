import React, { Component, Fragment } from 'react';
import Masonry from 'react-masonry-component';
import Tile from './Tile';
import photos from '../photos';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = { layoutHidden: true };
    this.handleLayoutComplete = this.handleLayoutComplete.bind(this);
  }

  handleLayoutComplete() {
    if (this.state.layoutHidden) {
      this.setState({ layoutHidden: false });
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.layoutHidden && <div className="loader" />}
        <div
          className={`tile-container${this.state.layoutHidden ? ' hide' : ''}`}
        >
          <Masonry
            onLayoutComplete={this.handleLayoutComplete}
            options={{ transitionDuration: 0 }}
          >
            {photos.map(photo => (
              <Tile {...photo} key={photo.title} />
            ))}
          </Masonry>
        </div>
      </Fragment>
    );
  }
}
