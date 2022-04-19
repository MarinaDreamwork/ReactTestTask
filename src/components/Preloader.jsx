import { Row, Spinner } from "react-bootstrap";

const Preloader = () => {
  return (
    <Row className='justify-content-center mt-3'>
      <Spinner animation='grow' variant='secondary'/>
    </Row>
  )
}
export default Preloader;