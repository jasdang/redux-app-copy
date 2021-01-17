import rootReducer from './reducers/index';
import {createStore, compose} from 'redux';

const store = compose(window.devToolsExtension && window.devToolsExtension())(
  createStore
)(rootReducer);

export default store;
