import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import Main from './Components/Main/Main';
import Location from './Components/Location/Location';
import Landing from './Components/Landing/Landing';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

render(
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing} />
        <Route path='/location' component={Location}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.application'))
