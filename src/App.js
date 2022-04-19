import { useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import MenuBurger from './components/menuBurger';
import NavigationMenu from './components/NavigationMenu';
import OffcanvasWrapper from './components/OffcanvasWrapper';
import { getImages} from './redux/actions/actionCreator';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './components/AboutMe';
import { createBrowserHistory} from 'history';

function App() {
  const images = useSelector(store => store?.images?.images[0] || []);
  const imagesGallery = images.slice(0, 24); // вынести в доп.функцию

  const history = createBrowserHistory();

  const dispatch = useDispatch();

  const handleImages = () => {
    dispatch(getImages());
  }

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <BrowserRouter>
      <Container>
        <Header onShow={handleShow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/galery' element={<Gallery onGetImages={handleImages} imagesGallery={imagesGallery} onHide={handleClose}/>} />
          <Route path='about_me' element={<AboutMe />} />
        </Routes>
      </Container>
      <OffcanvasWrapper handleClose={handleClose} show={show}/>
   </BrowserRouter>
  );
}

export default App;
