import React from 'react';

const Location = (props) => {
  const allBars = props.barArray.map((barObj) => {
    console.log(barObj.results);
  })
}

export default Location;
