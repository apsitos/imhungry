import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import rootReducer from './reducers/index';


// import Main from './Components/Main/Main';
// import Location from './Components/Location/Location'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Router routes={Routes} />
  </Provider>,
 document.querySelector('.application'))

//   <Router>
//     <Route path="/" component={Main}>
//     <Route path="/location" component={Location}/>
//   </Route>
// </Router>
