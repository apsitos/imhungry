import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Location from '../Location/Location';
require('./main-styles');
// import getPlaces from '../../../src/controller'

export default class Main extends React.Component {
  constructor() {
    super();
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
    fetch(`/api/places`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ barArray: data.results });
    })
  }

  render() {
    const cloned = React.cloneElement(this.props.children, {barArray: this.state.barArray})
    return(
      <div>
        <Header />
        <input type='text'
          value = {this.state.address}
          onChange={ (e) => this.setLocation(e) }
          placeholder='Enter your address'
        />
        <Link to='/location'>
          <Button id='findBars' handleClick={this.getBars.bind(this)} name="Find a Bar!" />
        </Link>
        <div>
          {cloned}
        </div>
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
