import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { carsReducer } from './reducers/carsReducer';

const composeEnhancer = composeWithDevTools({});

const rootReducer = combineReducers({
  carsReducer,
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));


export default store;