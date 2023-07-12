import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counter/counterSlice'

function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>Increment</button>
        <div>{count}</div>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
