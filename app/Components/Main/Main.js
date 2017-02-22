import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
require('./main-styles');
// import getPlaces from '../../../src/controller'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state= {
      address:''
    }
  }

  geocodeAddress() {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.state.address }, function(results, status){
      if(status == 'OK') {
        console.log(results);
      }
    })
  }


  getBars() {
    fetch(`/api/places`)
    .then((response) => {
      console.log(response)
      return response.json()
    }).then((data) => {
      console.log(data)
    })
  }


  render() {
    return(
      <div>
        <Header />
        <input type='text'
          value={this.state.address}
          onChange={ (e)=>this.setState({ address: e.target.value }) }
          placeholder='Enter your address'
        />
        <Button id='findBars' handleClick={this.getCoordinates.bind(this)} name="Find a Bar!" />
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
