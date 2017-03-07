import React from 'react';
import Button from '../Button/Button';
require('./location-style');

export default class Location extends React.Component {

  oneBar() {
    let allBars = this.props.bars.map((barObj) => {
      console.log(barObj);
      return(
        <div key={barObj.id} id="found-location">
          <h3 className='name'>{barObj.name}</h3>
          <h4 className='address'>{barObj.vicinity}</h4>
          <Button id='reload' handleClick={this.removeBar(barObj)} name='Find Another' />
        </div>
      )
    })
    let singleBar = allBars[Math.floor(Math.random() * allBars.length)];
    return singleBar;
  }

  removeBar(barObj) {
    console.log('in removeBar');
    // for (let i = 0; i < allBars.length; i++) {
    //   if(allBars[i].id === barObj.id) {
    //     allBars.splice(i, 1)
    //   }
    // }
    // this.oneBar()
  }

  render() {
    return(
      <div>
        {this.oneBar()}
      </div>
    )
  }
}
