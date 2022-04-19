import { SET_IMAGES } from '../constants';

const initialState = {
  images: []
}

const images = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_IMAGES:
      return {
        ...state,
       images: [...state.images, payload] 
      };
    default: return state;
  }
}

export default images;