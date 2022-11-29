// import { useSelector,useDispatch } from "react-redux";
import { connect } from "react-redux";

function App(props) {
  // const counter = useSelector(state => state.counter)
  // const dispatch = useDispatch()
  const increment = () => {
    props.dispatch({ type: "INC" })
  }
  const decrement = () => {
    props.dispatch({type:"DEC" })
  }

  const Add = () => {
    props.dispatch({ type: "ADD" ,payload:10})
  }
  return (
    <div>
      <h1>Counter : {props.counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={Add}>+ Add 10</button>
    </div>
  );
}

const addStateToProps = (state) => {
  return {
    counter : state.counter
  }
}

export default connect(addStateToProps)(App);
