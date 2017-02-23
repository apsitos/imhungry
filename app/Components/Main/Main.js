import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
require('./main-styles');
// import getPlaces from '../../../src/controller'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state= {
      address:'',
      lat: '',
      long: '',
      allBars: []
    }
  }

  setLocation(e) {
    this.setState({ address: e.target.value })
  }

  getBars(location) {
    fetch(`/api/places`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ allBars: data });
    })
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
        <Button id='findBars' handleClick={this.getBars.bind(this)} name="Find a Bar!" />
        <
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
