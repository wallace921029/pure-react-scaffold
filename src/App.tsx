import '@/styles/app.scss'

import {RouterProvider} from 'react-router-dom'
import router from './router'

export default function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}
