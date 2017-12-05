import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.width = 1000;
    this.state = {
      photos: []
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(raw => raw.json())
      .then(photos => {
        const adjustedPhotos = photos.slice(100, 110).map(({albumId, id, title, url, thumbnailUrl}) => {
          return {
            albumId,
            id,
            title,
            url: url.replace(/\/([0-9]{3})\//g, `/${this.width}x600/`),
            thumbnailUrl
          }
        });
        this.setState({ photos: adjustedPhotos });
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Stupid Little Galleries </h1>
        </header>
        <p>{this.state.photos.length}</p>
        <Gallery photos={this.state.photos}/>
        <Gallery photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
