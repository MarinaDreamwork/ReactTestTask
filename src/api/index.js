import axios from "axios";

export const getImages = async () => {
  const request = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return await request;
}