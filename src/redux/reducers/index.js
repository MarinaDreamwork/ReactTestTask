import { combineReducers } from 'redux';
import images from './images';
import imagesError from './error';

const reducer = combineReducers({
  images,
  imagesError
});

export default reducer;