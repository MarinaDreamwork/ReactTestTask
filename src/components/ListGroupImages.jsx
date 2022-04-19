import { Col, Row, Image} from "react-bootstrap";
import Preloader from "./Preloader";

const ListGroupImages = ({ imagesIntoCategories }) => {

  return (
    <>
      <Row className='mt-3'>
        {
          // если parts еще не загружены, отобразить Preloader
          !imagesIntoCategories || imagesIntoCategories === 'undefined' ?
          <Preloader /> :
          null
        }
        {
          imagesIntoCategories.map(part => <Col><Image key={part.id} src={part.thumbnailUrl} className='image-item'/></Col>)
        }
      </Row>
    </>
  )
}

export default ListGroupImages;