import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Components/Main/Main'
import Location from './Components/Location/Location'


const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <Route path="/location" component={Location}/>
    </Route>
  </Route>
);

export default Routes;
