import React from 'react';
require('./button-style');

const Button = (props) => {
  return (
    <button id={props.id} onClick={() => props.handleClick()}>{props.name}</button>
  );
}

export default Button;
