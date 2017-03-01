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
      this.getBars();
    })
  }

  getBars() {
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
    .then((response) => {
      const data = response.json();
      console.log(data);
      this.setState({ barArray: data.results });
    })
    .catch((err) => {
      throw new Error ('getBars' ,err);
    })
  }

  showBars() {
    this.getCoords()
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
