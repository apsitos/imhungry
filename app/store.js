import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistore } from 'react-router';
import rootReducer from './reducers/index';
