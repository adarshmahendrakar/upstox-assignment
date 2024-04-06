import { combineReducers } from 'redux';
import HoldingsReducer from './HoldingsReducer';

const rootReducer = combineReducers({
  counter: HoldingsReducer,
});

export default rootReducer;
