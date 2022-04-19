import axios from "axios";

export const getImages = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/photos');
  return await request.json();
}