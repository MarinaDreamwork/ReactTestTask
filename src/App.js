import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store => store);
  console.log('store', store);
  return (
    <div className="App">
      Привет! Стартовало выполнение тестового задания!
    </div>
  );
}

export default App;
