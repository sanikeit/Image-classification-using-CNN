import React, { useState } from 'react'
import './Tryit.css'

import DragAndDrop from '../utils/DragAndDrop'

function Tryit() {
  const [selectedFile, setSelectedFile] = useState(null)
  return (
    <>
    <div className="table">
      <div className="title-div">
        <h1>
          <span>Machine Learning API</span>
        </h1>
      </div>
      </div>
      <DragAndDrop getFileName={setSelectedFile} />
    </>
  )
}

export default Tryit
