import { useState } from "react";
import { Col, Row } from "react-bootstrap";
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

    const handleImageClick = (event) => {
      const {target} = event;
      const parentElement = target.closest('.images-row');
      console.log('parentElement', parentElement);
      
      target.classList.add('selected');
      console.log(target);
    //здесь нужно обработать клик на картинку:
    //1. добавим класс для картинки, а в нем уже пропишем все css свойства
    //2. показать кнопку (далее будет переход на новую страницу)
  }

  // if(!imagesIntoCategories || imagesIntoCategories === []) {
  //   
  // }
  
  return (
    <Row>
      <Col sm={2}>
        <ListGroupWrapper currentCategory={currentCategory} onCategoryChange={handleChangeClick}/>
      </Col>
      <Col sm={10}>
        {
          imagesIntoCategories ?
          <ListGroupImages imagesIntoCategories={imagesIntoCategories} onImageClick={handleImageClick}/> :
          null
        }
      </Col>
    </Row>
  )
}

export default Gallery;