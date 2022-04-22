import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes} from "react-router";
import { Link } from "react-router-dom";
import { loadImages, setCurrentCategory, setCurrentImage, setImagesIntoCategories} from "../redux/actions/actionCreator";
import { paginate } from "../utils/utils";
import Details from "./Details";
import ListGroupImages from "./ListGroupImages";
import ListGroupWrapper from "./ListGroupWrapper";

const Gallery = ({ loading }) => {
  const images = useSelector(store => store?.images?.images || []);
  const currentCategory = useSelector(store => store?.currentCategoryItem?.currentItem);
  const currentImages = useSelector(store => store?.currentImageItem?.imagesId);
  const IMAGES_INTO_PAGE = 6;
  const category = paginate(images, IMAGES_INTO_PAGE, currentCategory);

  const dispatch = useDispatch();

  const handleChangeClick = (categoryIndex) => {
    dispatch(setCurrentCategory(categoryIndex));
    dispatch(loadImages());
    dispatch(setImagesIntoCategories(category))
  }

    const handleImageClick = (id) => {
    //здесь нужно обработать клик на картинку - передать объект по id в стор
      console.log('id', id);
      // найти по id
    //setCurrentImage()
  }

  return (
    <Row>
      <Col sm={2}>
        <ListGroupWrapper currentCategory={currentCategory} imagesByCategories={category} onCategoryChange={handleChangeClick} />
      </Col>
      <Col sm={10}>
        {
          images ?
          <ListGroupImages imagesByCategories={category} onImageClick={handleImageClick} loading={loading} currentImages={currentImages} dispatch={dispatch}/> :
          null
        }
      </Col>
    </Row>
  )
}

export default Gallery;