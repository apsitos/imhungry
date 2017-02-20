import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>Howdy Pardner!</div>
  )
}

render(<App />, document.querySelector('.application'))
