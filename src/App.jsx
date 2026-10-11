import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./Reducers/CounterReducer";

const App = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      <button onClick={() => { dispatch(reset()) }}>reset</button>
    </div>
  )
}

export default App
