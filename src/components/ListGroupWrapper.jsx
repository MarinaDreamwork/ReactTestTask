import { Button, ListGroup, ListGroupItem } from "react-bootstrap"
import { useSelector } from "react-redux"

const ListGroupWrapper = ({ currentCategory, onCategoryChange }) => {
  const categoryTitles = useSelector(store => store?.currentCategoryItem?.categoryTitles);
  
  return (
    <ListGroup className='mt-3'>
      {
        categoryTitles.map(categoryTitle => {
          return <ListGroupItem key={categoryTitle.id} data-category={categoryTitle.id} className={'category-item list-group-item-action' + (currentCategory === categoryTitle.id ? ' active' : '')} onClick={() => onCategoryChange(categoryTitle.id)}>{categoryTitle.title}</ListGroupItem>})
      }
     </ListGroup> 
  )
}

export default ListGroupWrapper;