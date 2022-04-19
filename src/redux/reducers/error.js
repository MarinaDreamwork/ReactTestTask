import { SET_IMAGES_ERROR } from "../constants";

const initialState = {
  imagesError: ''
}

const imagesError = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_IMAGES_ERROR:
      return {
        ...state,
       imagesError: payload 
      };
    default: return state;
  }
}

export default imagesError;