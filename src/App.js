// frontend/src/App.js
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/HomeRoute'

const App = () => {
  console.log('App component rendered')
  return (
    <Router>
      <Routes>
        {/* Ensure each Route has an element or component to render */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
