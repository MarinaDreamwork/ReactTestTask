import { useState } from "react";
import { Col } from "react-bootstrap";
import { paginate } from "../utils/utils";
import ListGroupImages from "./ListGroupImages";
import ListGroupWrapper from "./ListGroupWrapper";

const Gallery = (props) => {
  const { imagesGallery, onGetImages } = props;
  const [currentCategory, setCurrentCategory] = useState();
  const [imagesIntoCategories, setImagesIntoCategories] = useState();
  const IMAGES_INTO_PAGE = 6;

  const handleChangeClick = (categoryIndex) => {
    setCurrentCategory(categoryIndex);
    onGetImages();
    setImagesIntoCategories(paginate(imagesGallery, IMAGES_INTO_PAGE, categoryIndex));
  }

  // if(!imagesIntoCategories || imagesIntoCategories === []) {
  //   
  // }
  
  return (
    <>
      <Col sm={2}>
        <ListGroupWrapper currentCategory={currentCategory} onCategoryChange={handleChangeClick}/>
      </Col>
      <Col sm={10}>
        {
          imagesIntoCategories ?
          <ListGroupImages imagesIntoCategories={imagesIntoCategories}/> :
          null
        }
      </Col>
    </>
  )
}

export default Gallery;