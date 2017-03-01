import React from 'react';

export default class Location extends React.Component {

  oneBar() {
    let allBars = this.props.bars.map((barObj) => {
      return(
        <div key={barObj.id}>
          <h3 className='name'>{barObj.name}</h3>
          <h4 className='address'>{barObj.vicinity}</h4>
        </div>
      )
    })
    return allBars[Math.floor(Math.random() * allBars.length)]
  }

  render() {
    return(
      <div id="found-location">
        {this.oneBar()}
      </div>
    )
  }
}
