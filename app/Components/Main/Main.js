import React from 'react';
require('./main-styles');

export default class Main extends React.Component {
  componentDidMount() {
    fetch('getPlaces')
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
