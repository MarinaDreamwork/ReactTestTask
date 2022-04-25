import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import OffcanvasWrapper from './components/OffcanvasWrapper';
import { openCanvas, closeCanvas} from './redux/actions/actionCreator';
import { Routes } from 'react-router';
import Home from './pages/home';
import AboutMe from './components/AboutMe';
import Details from './components/Details';

function App() {
  const images = useSelector(store => store?.images?.images || []);
  const isOpen = useSelector(store => store?.offcanvas?.isOpen);
  const isLoading = useSelector(store => store?.images?.loading);
  const currentImage = useSelector(store => store?.currentImageItem?.currentItem);

  const buttonDetails = document.querySelector('.button-details');

  const dispatch = useDispatch();

  const handleShow = () => dispatch(openCanvas(true));
  const handleClose = () => dispatch(closeCanvas(false));

  return (
    <BrowserRouter>
      <Container>
        <Header onShow={handleShow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='galery' element={<Gallery buttonDetails={buttonDetails} loading={isLoading} dispatch={dispatch} images={images}/>} /> 
          <Route path='details' element={<Details currentImage={currentImage} dispatch={dispatch} images={images}/>} />
          <Route path='about_me' element={<AboutMe />} />
        </Routes>
        <NavLink to="details" className='button-details p-2'>Подробнее...</NavLink>
      </Container>
      <OffcanvasWrapper handleClose={handleClose} show={isOpen}/>
   </BrowserRouter>
  );
}

export default App;
