// Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Screens
import Home from './screens/Home/Home'
import Neanderthals from './screens/Neanderthals/NeanderthalsStart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/neanderthals" element={<Neanderthals/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
