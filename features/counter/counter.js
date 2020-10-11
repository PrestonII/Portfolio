import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  selectCount,
} from './counter.slice';

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector(selectCount);
  return (
    <div>
      <h1>
        Count: <span>{value}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
