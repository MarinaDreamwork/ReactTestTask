import { Nav } from "react-bootstrap";

const NavigationMenu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column mt-3">
      <Nav.Link eventKey="link-1">Галерея</Nav.Link>
      <Nav.Link eventKey="link-2">Обо мне</Nav.Link>
    </Nav>
  )
}

export default NavigationMenu;