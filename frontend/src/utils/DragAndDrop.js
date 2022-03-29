import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './DragAndDrop.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom'

import ML from '../components/ML'

function DragAndDrop(props) {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [error, setError] = useState(true)

  const changeHandler = (event) => {
    setError(false)
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  const handleSubmission = () => {
    const formData = new FormData()
    formData.append('file', selectedFile)

    axios
      .post('http://localhost:8000/upload_file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res.data.response)
        props.getFileName(res.data.response)
      })
      .catch((error) => {
        console.error('Error:', error)
        setError(true)
      })
  }

  const navifunc = () => {
    navigate('/Tryit/ml', { state: { filename: selectedFile } })
  }

  const ImageBox = () => {
    if (error) {
      return (
        <>
          <img src="/images/error1.jfif" alt="error" className="img3" />
        </>
      )
    }
    return (
      <>
      <img
        src="/images/ml3.jpg"
        alt="error"
        className="img3"
        onClick={navifunc}
      />
      </>
    )
  }

  return (
    <>
      <div className="top-flex">
        <div className="table-input">
          <div>
            <input
              type="file"
              name="file"
              onChange={changeHandler}
              className="btn btn-primary"
            />
          </div>
          <div>
            <button className="btn-submit" onClick={handleSubmission}>
              <i className="fa fa-arrow-right icon2"></i>
            </button>
          </div>
          <div>
            {isSelected ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
          </div>
        </div>

        <div className="table-input">
          <div className="table-image">
            <ImageBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default DragAndDrop
