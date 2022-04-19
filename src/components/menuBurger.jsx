import MenuBurgerIcon from '../img/burger.svg';

const MenuBurger = ({ onShowOffcanvas }) => {
  return (
    <img className='burger-icon p-1' src={MenuBurgerIcon} alt='icon: burger'onClick={onShowOffcanvas}/>
  )
}

export default MenuBurger;