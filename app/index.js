import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import rootReducer from './reducers'
import Main from './Components/Main/Main';
import Location from './Components/Location/Location'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

render(
  <Provider >
    <Router browserhistory={hashHistory}>
      <Route path="/" component={Main}>
        <Route path='location' component={Location}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.application'))
