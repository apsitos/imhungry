import React from 'react';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: ''
    }
  }


allBars() {
  return this.props.bars.map((barObj) => {
    console.log(barObj)
    return(
      <div key={barObj.id}>
        <h2>{barObj.name}</h2>
      </div>
    )
  })
}

  render() {
    return(
      <div id="found-location">
        {this.allBars()}

      </div>
    )
  }
}
