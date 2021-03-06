import { Col, Row } from "react-bootstrap"
import MenuBurger from "./menuBurger"

const Header = ({ onShow }) => {
  return (
    <header>
     <Row className='header mt-3 p-2'>
        <Col className='d-flex justify-content-end'>
          <MenuBurger onShowOffcanvas={onShow}/>
        </Col>
      </Row>
      </header>
  )
}

export default Header;