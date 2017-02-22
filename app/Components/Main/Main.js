import React from 'react';
import Header from '../Header/Header';
require('./main-styles');
// import getPlaces from '../../../src/controller'

export default class Main extends React.Component {
  componentDidMount() {
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
      </div>
    )
  }
}

// lat: 39.7257155
// long: -104.9713034
