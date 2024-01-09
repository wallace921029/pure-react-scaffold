import './styles/home.scss'

import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../store'
import {increment, decrement} from '../../store/modules/counter-slice'

function Home() {
  const countValue = useSelector((state: RootState) => state.counterSlice.value)

  const dispatch = useDispatch()

  const handleAddOne = () => {
    dispatch(increment())
  }

  const hanldeSubtractOne = () => {
    dispatch(decrement())
  }

  return (
    <div className='home'>
      <h1>Home</h1>

      <div className='counter'>
        <h2>Here is a counter demo by Redux Toolkit</h2>

        <div className='counter-box'>
          <button
            className='counter-button'
            onClick={hanldeSubtractOne}
          >
            -
          </button>
          <span className='counter-value'>{countValue}</span>
          <button
            className='counter-button'
            onClick={handleAddOne}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
