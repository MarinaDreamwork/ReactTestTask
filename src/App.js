import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import OffcanvasWrapper from './components/OffcanvasWrapper';
import { openCanvas, closeCanvas} from './redux/actions/actionCreator';
import { Routes, Redirect } from 'react-router';
import Home from './pages/home';
import AboutMe from './components/AboutMe';
import Details from './components/Details';
// import { createBrowserHistory} from 'history';

function App() {
  const isOpen = useSelector(store => store?.offcanvas?.isOpen);
  const isLoading = useSelector(store => store?.images?.loading)

  //const history = createBrowserHistory();

  const dispatch = useDispatch();

  const handleShow = () => dispatch(openCanvas(true));
  const handleClose = () => dispatch(closeCanvas(false));

  return (
    <BrowserRouter>
      <Container>
        <Header onShow={handleShow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='galery' element={<Gallery loading={isLoading} />} /> 
          <Route path='details' element={<Details />} />
          <Route path='about_me' element={<AboutMe />} />
        </Routes>
        <Link to="details" className='button-details p-1'>Подробнее...</Link>
      </Container>
      <OffcanvasWrapper handleClose={handleClose} show={isOpen}/>
   </BrowserRouter>
  );
}

export default App;
