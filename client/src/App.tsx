// Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Screens
import Home from './screens/Home/Home'
import Neanderthals from './screens/Neanderthals/NeanderthalsStart'
import OddOneOut from './screens/OddOneOut/OddOneOutStart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/neanderthals" element={<Neanderthals/>}/>
          <Route path="/oddoneout" element={<OddOneOut/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
