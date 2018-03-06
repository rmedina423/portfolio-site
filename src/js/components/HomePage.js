import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Tile from './Tile';
import collectionOfPhotos from '../collectionOfPhotos';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

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
      <div>
        {this.state.layoutHidden && <div className="loader" key="loader" />}
        <div
          className={`tile-container ${this.state.layoutHidden && 'hide'}`}
          key="tile-container"
        >
          <Masonry
            onLayoutComplete={this.handleLayoutComplete}
            options={{ transitionDuration: 0 }}
          >
            {collectionOfPhotos.map(collectionProps => (
              <Tile {...collectionProps} key={collectionProps.title} />
            ))}
          </Masonry>
        </div>
      </div>
    );
  }
}
