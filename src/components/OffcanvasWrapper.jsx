import { Offcanvas } from "react-bootstrap";
import NavigationMenu from "./NavigationMenu";
import PersonalData from "./PersonalData";

const OffcanvasWrapper = ({ handleClose, show }) => {
  
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header className='pb-0' closeButton>
        <Offcanvas.Title>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <PersonalData />
        <NavigationMenu onHide={handleClose}/>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default OffcanvasWrapper; 