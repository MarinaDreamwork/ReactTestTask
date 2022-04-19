import { Col, Row, Image} from "react-bootstrap";
import { choosingImage } from "../utils/utils";
import Preloader from "./Preloader";

const ListGroupImages = ({ imagesIntoCategories, onImageClick }) => {
  console.log('imagesIntoCategories', imagesIntoCategories);

  const handleMouseEnter = (e) => {
    choosingImage(e);
    //  const {clientX: x, clientY: y} = e;
    //   e.target.style.left = `${x}px`
    //   e.target.style.top = `${y}px`
    //   e.target.style.background = 'red';
  }
  return (
    <>
      <Row className='images-row mt-3'>
        {
          // если parts еще не загружены, отобразить Preloader
          !imagesIntoCategories || imagesIntoCategories === 'undefined' ?
          <Preloader /> :
          null
        }
        {
          imagesIntoCategories.map(part => <Col><Image key={part.id} src={part.thumbnailUrl} className='image-item' onClick={(e) => onImageClick(e)} onMouseEnter={handleMouseEnter}/></Col>)
        }
      </Row>
    </>
  )
}

export default ListGroupImages;