export const paginate = (arrayOfImages, countImagesOnPage, currentCategory) => {
  const startIndex = (currentCategory - 1) * countImagesOnPage;
  return [...arrayOfImages].splice(startIndex, countImagesOnPage);
}

export const delay = (ms) => {
  new Promise(resolve => setTimeout(resolve, ms));
}