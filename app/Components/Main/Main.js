import React from 'react';
require('./main-styles');

export default class Main extends React.Component {
  componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7392,-104.9903&radius=10&type=restaurant&key=${API_KEY}`)
      .then((response) => {
        console.log(response)
      return response.json()
    }).then((data) => {
      console.log(data)
    })
  }

  render() {
    return(
      <div>Connected</div>
    )
  }
}
