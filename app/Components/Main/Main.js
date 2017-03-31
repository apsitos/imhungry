import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Button from '../Button/Button';
import Location from '../Location/Location';
require('./main-styles.scss');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      lat: '',
      long: '',
      barArray: []
    }
  }

  getCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.setState({lat: lat, long: long})
      this.getBars(location);
    })
  }

  getBars(location) {
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ barArray: data.results });
    })
    .catch((error) => {
      console.log('getBars: nope', error)
    })
  }

  showBars() {
    this.getCoords();
  }


  render() {
    return(
      <div className='img'>
        <div className='wrapper'>
          <Header />
          <Landing />
          <div id="searchbar">
            <p>Find a Restaurant Nearby</p>
            <Button id='search-btn' handleClick={this.showBars.bind(this)} name="Click Here!"/>
          </div>
          <Link>
            <Location bars={this.state.barArray}/>
          </Link>
        </div>
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
