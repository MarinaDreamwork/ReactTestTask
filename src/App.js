import { useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Gallery from './components/Gallery';
import MenuBurger from './components/menuBurger';
import NavigationMenu from './components/NavigationMenu';
import PersonalData from './components/PersonalData';
import { getImages} from './redux/actions/actionCreator';

function App() {
  const images = useSelector(store => store?.images?.images[0] || []);
  const imagesGallery = images.slice(0, 24); // вынести в доп.функцию

  const dispatch = useDispatch();

  const handleImages = () => {
    dispatch(getImages());
  }

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Container>
        <Row className='header mt-3 p-2'>
          <Col className='d-flex justify-content-end'>
            <MenuBurger onShowOffcanvas={handleShow}/>
          </Col>
        </Row>
        <Row>
          <Gallery onGetImages={handleImages} imagesGallery={imagesGallery}/>
        </Row>
      </Container>
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className='pb-0' closeButton>
          <Offcanvas.Title>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <PersonalData />
          <NavigationMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default App;
