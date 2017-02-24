import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Location from '../Location/Location';
import Coordinates from '../../Helpers/Coordinates';
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
    Coordinates.then()
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
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
        <div>
          {cloned}
        </div>
      </div>
    )
  }
}

// const cloned = React.cloneElement(this.props.children, {barArray: this.state.barArray})
// lat: 39.7257155
// long: -104.9713034
