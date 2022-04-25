import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadImages, setCurrentCategory, setImagesIntoCategories} from "../redux/actions/actionCreator";
import { paginate } from "../utils/utils";
import ListGroupImages from "./ListGroupImages";
import ListGroupWrapper from "./ListGroupWrapper";

const Gallery = ({ buttonDetails, loading, dispatch, images }) => {
 
  const currentCategory = useSelector(store => store?.currentCategoryItem?.currentItem);
  const currentImages = useSelector(store => store?.currentImageItem?.imagesId);
  const IMAGES_INTO_PAGE = 6;
  const category = paginate(images, IMAGES_INTO_PAGE, currentCategory);

  const handleChangeClick = (categoryIndex) => {
    dispatch(setCurrentCategory(categoryIndex));
    dispatch(loadImages());
    dispatch(setImagesIntoCategories(category))
  }

  return (
    <Row>
      <Col xl={2} lg={3} sm={4} className='justify-content-sm-center'>
        <ListGroupWrapper currentCategory={currentCategory} imagesByCategories={category} onCategoryChange={handleChangeClick} />
      </Col>
      <Col className='d-flex justify-content-center'>
        <ListGroupImages imagesByCategories={category} loading={loading} currentImages={currentImages} dispatch={dispatch} buttonDetails={buttonDetails}/>
      </Col>
    </Row>
  )
}

export default Gallery;