import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Button from '../Button/Button';
import Location from '../Location/Location';
require('./main-styles');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      lat: '',
      long: '',
      barArray: [],
      singleBar: []
    }
  }

  // getCoords() {
  //   console.log('getCoords');
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log('nav entered');
  //     const lat = position.coords.latitude;
  //     const long = position.coords.longitude;
  //     console.log(lat, long);
  //     this.setState({lat: lat, long: long});
  //     this.getBars(location);
  //   })
  // }

  getBars(location) {
    fetch(`/api/places?lat=${this.state.lat}&long=${this.state.long}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ barArray: data.results });
    })
    .catch((error) => {
      console.log('getBars: nope', error)
    })
  }
  //
  // showBars() {
  //   console.log('button clicked');
  //   this.getCoords();
  // }


  render() {
    return(
      <div className='img'>
        <div className='wrapper'>
          <Header />
          <Landing />
          <div id="searchbar">
            <p>Find a Restaurant Nearby</p>
            <Link to='/location'>
              <Button id='search-btn' handleClick={this.getBars.bind(this)} name="Click Here!"/>
            </Link>
          </div>
            <Location bars={this.state.barArray} singleBar={this.state.singleBar}/>
        </div>
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
