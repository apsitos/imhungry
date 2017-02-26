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
      formattedAddress: '',
      lat: '',
      long: '',
      barArray: []
    }
  }

  setLocation(e) {
    this.setState({ address: e.target.value })
  }

  formatAddress() {
    let formattedAddress = this.state.address.trim().split(' ')
    .map(i => i.concat('+')).join()
    this.setState({ formattedAddress: formattedAddress})
  }

  getCoords() {
    const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`;
    const COORDS_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;
    console.log(this.state.address)
    fetch(`${COORDS_URL}${this.state.address}&key=${API_KEY}`)
    .then(res => {
      console.log(res)
      return res.json()
    }).then(res => {
      this.setState({
        lat: res.results[0].geometry.location.lat,
        long: res.results[0].geometry.location.lng
      })
    })
    .catch(() => {
      console.log('getCoords: nope');
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
    this.formatAddress()
    .then(this.getCoords())
    .then(this.getBars(location))
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
