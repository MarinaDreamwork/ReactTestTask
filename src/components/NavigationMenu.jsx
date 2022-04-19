import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column mt-3 p-3">
      <NavLink className='pb-3' to="/galery">Галерея</NavLink>
      <NavLink to="/about_me">Обо мне</NavLink>
    </Nav>
  )
}

export default NavigationMenu;