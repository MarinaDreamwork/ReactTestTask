import { GET_IMAGES, SET_IMAGES } from "../constants";

export const getImages = () => ({
  type: GET_IMAGES 
})

export const setImages = (payload) => ({
  type: SET_IMAGES,
  payload
})

