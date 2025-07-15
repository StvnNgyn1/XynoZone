// Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Screens
import Home from './screens/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
