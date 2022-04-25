import { Col, Row, Image } from "react-bootstrap";
import { setCurrentImage } from "../redux/actions/actionCreator";
import Preloader from "./Preloader";

const ListGroupImages = ({ imagesByCategories, loading, currentImages, dispatch, buttonDetails }) => {
  console.log('imagesIntoCategories', imagesByCategories);
  
  const handleMouseEnter = (e) => {
    console.log('e', e);
    const {clientX, clientY} = e;
    dispatch(setCurrentImage(Number(e.target.id)));
    buttonDetails.style.left = `${clientX - 50}px`;
    buttonDetails.style.top = `${clientY-15}px`;
  }
  const handleMouseLeave = (e) => {
    buttonDetails.style.left = '-200px'
  }

  return (
    <>
      <Row xl={6} lg={3} sm={2}>
        {
          loading ?
          <Preloader /> :
          imagesByCategories.map(part => <Col className='d-flex justify-content-sm-center p-xl-2 p-lg-3 images-row mt-3 p-sm-2' key={part.id}><Image id={part.id} src={part.thumbnailUrl} className='image-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></Col>)
        }
      </Row>
    </>
  )
}

export default ListGroupImages;