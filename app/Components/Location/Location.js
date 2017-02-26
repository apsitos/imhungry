import React from 'react';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: ''
    }
  }

  // openNow() {
  //   if(this.props.bars.opening_hours.open_now===true) 'Yes!'
  // }

  allBars() {
    return this.props.bars.map((barObj) => {
      console.log(barObj)
      return(
        <div key={barObj.id}>
          <h3 className='name'>{barObj.name}</h3>
          {/* <h4>Open now: {this.openNow()} </h4> */}
          <h4 className='address'>{barObj.vicinity}</h4>
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
