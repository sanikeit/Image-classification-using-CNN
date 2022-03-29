import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import ModelAnalysis from './components/ModelAnalysis'
import Tryit from './components/Tryit'
import ML from './components/ML'
import Documentation from './components/Documentation'
import FrontPage from './components/FrontPage'
import ScrollButton from './utils/ScrollButton'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route exact path="/ModelAnalysis" element={<ModelAnalysis />} />
            <Route path="/Tryit" element={<Tryit />} />
            <Route path="/Tryit/ml" element={<><Tryit /><ML /></>} />            
            <Route path="/Documentation" element={<Documentation />} />
          </Routes>
        </div>
      </Router>
      <ScrollButton />
    </>
  )
}

export default App
