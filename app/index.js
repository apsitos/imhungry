import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import Main from './Components/Main/Main';
import Location from './Components/Location/Location';
import Landing from './Components/Landing/Landing';

render(
  <Provider>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing} />
        <Route path='/location' component={Location}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.application'))
