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
      address:'',
      // formattedAddress: '',
      lat: '',
      long: '',
      barArray: []
    }
  }

  setLocation(e) {
    this.setState({ address: e.target.value })
    // this.setState({ address: '90 Corona St' })
  }

  formatAddress() {
    debugger
    return this.state.address.trim().split(' ')
    .map(i => i.concat('+')).join()
  }

  getCoords() {
    const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`;
    const COORDS_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

    return new Promise ((resolve, reject) => {
      const formattedAddress = this.formatAddress();
      fetch(`${COORDS_URL}${formattedAddress}&key=${API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.results) {
          this.setState({
            lat: data.results[0].geometry.location.lat,
            long: data.results[0].geometry.location.lng,
          });
          return resolve();
        } else {
          reject();
        }
      })
      .catch((err) => {
        throw new Error(err);
      })
    })
  }

  getBars(location) {
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
    .then((response) => {
      const data = response.json();
      this.setState({ barArray: data.results });
    })
    .catch((err) => {
      throw new Error ('getBars' ,err);
    })
  }

  showBars() {
    // this.formatAddress()
    // .then(this.getCoords())
    // .then(this.getBars(location))
    this.getCoords().then(this.getBars)
  }


  render() {
    return(
      <div>
        <Header />
        <input type='text'
          value = {this.state.address}
          onChange={ (e) => this.setLocation(e) }
          placeholder='Enter your address'
        />
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
