import { ListGroup, ListGroupItem } from "react-bootstrap"

const ListGroupWrapper = ({ currentCategory, onCategoryChange }) => {
  const categoryTitles = [
    {id: 1, title: 'Category 1'}, 
    {id: 2, title: 'Category 2'}, 
    {id: 3, title: 'Category 3'}, 
    {id: 4, title: 'Category 4'}, 
  ];
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