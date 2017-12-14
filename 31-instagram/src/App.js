// Instagram

// This is a fresh create-react-app. Some Instagram data has been added
// for you - `instagramPhotos` is an array of photo details.

// 1. Take a look at data.js so you know what properties are available.
// 2. Use the data to build an instagram feed. Display image, title & likes.

// Beast mode:
// 1. Some images have geolocation details. Use the react-google-maps react plugin
//    to display a map under these images.

import React, { Component } from 'react';
import './App.css';
import instagramPhotos from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        {instagramPhotos.map(photo => {
          return (
            <div>
              <p>{photo.user.full_name}</p>
              <p><img src={photo.link} alt='post' /></p>
              <p>{photo.likes.count}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
