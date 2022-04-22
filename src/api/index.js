import axios from "axios";

const URL_IMAGES = 'https://jsonplaceholder.typicode.com/photos';

export const getImagesFromServer = async () => {
  try {
    const response = await axios.get(URL_IMAGES);
    return response;
  } catch(error) {
    console.error(error);
  }
}