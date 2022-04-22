import { Col, Row, Image, NavLink} from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router";
import { setCurrentImage } from "../redux/actions/actionCreator";
import { choosingImage, modifyCurrentImage } from "../utils/utils";
import Details from "./Details";
import Preloader from "./Preloader";

const ListGroupImages = ({ imagesByCategories, onImageClick, loading, currentImages, dispatch }) => {
  console.log('imagesIntoCategories', imagesByCategories);
  const buttonDetails = document.querySelector('.button-details');

  const handleMouseEnter = (e) => {
    choosingImage(e); // что делает эта ф-ция
    console.log('e.target.id', e.target.id);
    e.target.style.zIndex = '0';
    dispatch(setCurrentImage(Number(e.target.id)));
    buttonDetails.style.left = modifyCurrentImage(e.target.id);
  }
  const handleMouseLeave = (e) => {
    e.target.style.zIndex = '2';
    buttonDetails.style.left = '-200px'
  }

  return (
    <>
      <Row className='images-row mt-3'>
        {
          loading ?
          <Preloader /> :
          imagesByCategories.map(part => <Col key={part.id}><Image id={part.id} src={part.thumbnailUrl} className='image-item' onClick={() => onImageClick(part.id)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></Col>)
        }
      </Row>
      <Row col={2}>
      </Row>
    </>
  )
}

export default ListGroupImages;