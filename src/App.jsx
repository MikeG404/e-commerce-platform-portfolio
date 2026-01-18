import './App.scss'
import { Routes, Route } from 'react-router'

import Home from './routes/home.component'
import Shop from './routes/shop.component'

import Navigation from './components/navigation/navigation.component'

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Route>
      </Routes>
  )
}

export default App
