import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar';

import ModelAnalysis from './components/ModelAnalysis'
import Tryit from './components/Tryit'
import Documentation from './components/Documentation'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route exact path="/ModelAnalysis" element={<ModelAnalysis />} />
            <Route path="/Tryit" element={<Tryit />} />
            <Route path="/Documentation" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
