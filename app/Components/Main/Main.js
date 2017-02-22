import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`
const COORDS_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`
require('./main-styles');
// import getPlaces from '../../../src/controller'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state= {
      address:'',
      lat: '',
      long: ''
    }
  }

  setLocation(e) {
    this.setState({ address: e.target.value })
  }

  getCoords(){
    fetch(`${COORDS_URL}${this.state.address}&key=${API_KEY}`)
    .then((res) => {
      return res.json()
    }).then((res) => {
      this.setState({
        lat:res.results[0].geometry.location.lat,
        lon:res.results[0].geometry.location.lng
      })
    })
  }

  getBars(location) {
    fetch(`/api/places`)
    .then((response) => {
      return response.json()
    }).then((data) => {
    })
  }

  render() {
    return(
      <div>
        <Header />
        <input type='text'
          onChange={ (e) => }
          placeholder='Enter your address'
        />
        <Button id='findBars' handleClick={this.getCoords.bind(this)} name="Find a Bar!" />
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
