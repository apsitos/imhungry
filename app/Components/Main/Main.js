import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Location from '../Location/Location';
// import getCoords from '../../Helpers/Coordinates'
require('./main-styles');

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
      console.log(position);
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.setState({lat: lat, long: long})
      console.log(this.state.lat, this.state.long);
    })
  }

  getBars(location) {
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ barArray: data.results });
    })
    .catch(() => {
      console.log('getBars: nope')
    })
  }

  showBars() {
    this.getCoords();
    this.getBars(location);
  }


  render() {
    return(
      <div>
        <Header />
        <Button id='findBars' handleClick={this.getBars.bind(this)} name="Find a Bar!"/>
        <div>
          <Location bars={this.state.barArray}/>
          words
        </div>
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
