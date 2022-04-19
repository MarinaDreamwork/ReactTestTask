import { useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MenuBurger from './components/menuBurger';
import { getImages} from './redux/actions/actionCreator';

function App() {
  const images = useSelector(store => store?.images?.images[0] || []);
  const parts = images.slice(0, 24); // вынести в доп.функцию
  console.log('part', parts);

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
      </Container>
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Navigation Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className='mb-1'>Marina Trushina</p>
          <p>silaevamo@gmail.com</p>
        </Offcanvas.Body>
      </Offcanvas>
      <button onClick={handleImages}>Get images</button>
    </>
  );
}

export default App;
