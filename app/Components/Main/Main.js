import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Location from '../Location/Location';
import getCoords from '../Helpers/Coordinates';
require('./main-styles');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      address:'',
      lat: '',
      long: '',
      barArray: []
    }
  }

  setLocation(e) {
    this.setState({ address: e.target.value })
  }

  getBars(location) {
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ barArray: data.results });
    }).catch((err) => {
      console.log('error',err);
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
          <Location />
        </div>
      </div>
    )
  }
}

// const cloned = React.cloneElement(this.props.children, {barArray: this.state.barArray})
// lat: 39.7257155
// long: -104.9713034
