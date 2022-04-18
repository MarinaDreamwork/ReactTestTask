import { combineReducers } from 'redux';
import { counter } from './counter';

// const test = (state = {}, action) => {
//   return state;
// }

const reducer = combineReducers({
  counter
});

export default reducer;