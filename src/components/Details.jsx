import { useEffect } from "react";
import { Button, Col, Image, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getFilterImage, loadImages } from "../redux/actions/actionCreator";
import { filterImageById } from "../utils/utils";
import Preloader from "./Preloader";
import { useNavigate } from 'react-router';

const Details = (props) => {
  const {images, currentImage, dispatch} = props;
  const filteredImage = filterImageById(images, currentImage);
  const loadingImage = useSelector(store=> store?.details?.loading);

  let navigation = useNavigate();

  const goHome = () => {
    navigation('/');
  }

  useEffect(() => {
    dispatch(loadImages());
    dispatch(getFilterImage());
  }, []);
  
  return (
    <Col className='d-flex justify-content-center m-3'>
    {
      loadingImage?
      <Preloader />:
        filteredImage.map(details => <Row key={details.id} className='details_info_wrapper m-3 p-3'>
            <Col className='d-flex justify-content-sm-center'>
              <Image className='details_image p-sm-3 ' src={details.url}/>
            </Col>
            <Col className='details_info m-3'>
              <h2 className='p-1 text-center pb-5'>{details.title}</h2>
              <p className='p-1 pb-3'><span className='details_id'>id</span> - <span className='details_id_link'>{details.id}</span></p>
              <p className='details_url p-1'><span className='details_url_title'>url</span> - <a href={details.url}>{details.url}</a></p>
            </Col>
          <Row>
            <Col>
              <Button className='m-3' variant="primary" size="lg" onClick={goHome}>Назад</Button>
            </Col>
          </Row>
        </Row>
      ) 
    } 
    </Col>
  )
}

export default Details;