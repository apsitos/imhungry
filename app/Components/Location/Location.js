import React from 'react';

export default class Location extends React.Component {

  shuffleBars(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex--);

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    console.log(array);
    return array;
  }

  // openNow() {
  //   if(this.props.bars.opening_hours.open_now===true) 'Yes!'
  // }

  allBars() {
    return this.props.bars.map((barObj) => {
      this.shuffleBars(barObj)
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

//barObj returns Object
// geometry: Object
// icon:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png"
// id:"a531548ec6fba7b864d5b25902582cdd5251fe92"
// name:"Grand China"
// opening_hours: Object
  // exceptional_date : Array[0]
  // open_now:false
  // weekday_text:Array[0]
  // __proto__: Object
// photos
// :
// Array[1]
// place_id
// :
// "ChIJTytsDbV-bIcRYtgnAfPb5NY"
// rating
// :
// 3.8
// reference
// :
// "CmRSAAAAwh96CaWfig7Q9099aEr1LmiJA4Y-ZHGlK4VIshKQ9uVcN-voApdyFEyOSRN5rrNQoDZ3rgeScoue353VEl3ix_Am6kYHgnNA2e119RZOfGzAqC0PLlmJFFyTubIeZaWMEhASR7U-PXwb6FHBx--CjtKvGhRJ0Z2NS1uZaM6kW9Rli6xZUebeog"
// scope
// :
// "GOOGLE"
// types
// :
// Array[4]
// vicinity
// :
// "2200 East Colfax Avenue, Denver"
// __proto__
// :
// Object
