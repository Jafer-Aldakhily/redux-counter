import { useSelector,useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({type : 'INC'})
  }
  const decrement = () => {
    dispatch({type : 'DEC'})
  }

  const Add = () => {
    dispatch({type: 'ADD',payload:10})
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={Add}>+ Add 10</button>
    </div>
  );
}

export default App;
