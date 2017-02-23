import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Components/Main/Main'


const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <IndexRoute component={PinBox} />
      <Route path='forecast'>
        <IndexRoute component={PinExtended}/>
        <Route path=':city' component={PinExtended}/>
      </Route>
      <Route path='settings' component={Settings} />
    </Route>
  </Route>
);

export default Routes;
