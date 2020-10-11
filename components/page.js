import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from './clock'
import Counter from '../features/counter/counter';
import { tick } from '../features/counter/counter.slice';
import Nav from './nav'

export default function Page() {
  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    const data = {
      light: true,
      lastUpdate: new Date().toJSON(),
    };
    dispatch(tick(data))
  }, 1000)

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  )
}
