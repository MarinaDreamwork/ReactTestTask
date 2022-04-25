import { Spinner } from "react-bootstrap";

const Preloader = () => {
  return (
    <>
      <Spinner className='d-flex justify-content-center mt-3' animation='grow' variant='secondary'/>
    </>
  )
}
export default Preloader;