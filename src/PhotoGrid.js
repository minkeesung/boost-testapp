import React, { Component } from 'react';
import './photo-grid.css'

class PhotoGrid extends Component {
  constructor(props){
    super(props)
  }

  render() {
    if (this.props.userPhotos.length == 0 && this.props.search.length > 0 && this.props.clicked){
      return (
        <div>No images found</div>
      )
    }
    return (
      <div className="parent-image">
        {this.props.userPhotos.map((photo, index) =>
          <div key={index} className="image">
            <img key={index} src={photo.urls.full} />
          </div>
        )}
      </div>
    )
  }
}

export default PhotoGrid
