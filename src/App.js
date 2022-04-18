import { useSelector, useDispatch } from 'react-redux';
import { getImages} from './redux/actions/actionCreator';

function App() {
  //const count = useSelector(store => store?.counter?.count);

  const dispatch = useDispatch();
  const handleImages = () => {
    dispatch(getImages());
  }

  return (
    <div className="App">
      <button onClick={handleImages}>Get images</button>
  
    </div>
  );
}

export default App;
