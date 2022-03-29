import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './ML.css'
import { Circles, Audio, Grid, MutatingDots } from 'react-loader-spinner'

function ML() {
  const location = useLocation()
  const { filename } = location.state
  const [l1, setl1] = useState(null)
  const [l2, setl2] = useState(null)
  const [l3, setl3] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (filename.name)
      axios
        .get('http://localhost:8000/vgg', {
          params: {
            name: filename.name
          }
        })
        .then((res) => {
          axios
            .get('http://localhost:8000/googlenet', {
              params: {
                name: filename.name
              }
            })
            .then((res) => {
              axios
                .get('http://localhost:8000/vgg', {
                  params: {
                    name: filename.name
                  }
                })
                .then((res) => {
                  setl2(res.data.response)
                })
              setl3(res.data.response)
            })
          setl1(res.data.response)
        })
  }, [filename.name])

  const Render1 = () => {
    if (!l1) return <Circles color="green" height={100} width={100} />
  }

  const Render2 = () => {
    if (!l2) return <Grid color="green" height={100} width={100} />
  }

  const Render3 = () => {
    if (!l3) return <Audio color="green" height={100} width={100} />
  }

  return (
    <>
      <div className="table-col">
        <div className="title-div">
          <h1>
            <span>Getting results from models</span>
          </h1>
        </div>
        <div className="table">
          <div>
            <h2>LeNet</h2>
            {Render1()}
            <p>{l1}</p>
          </div>
          <div>
            <h2>VGG16</h2>
            {Render2()}
            <p>{l2}</p>
          </div>
          <div>
            <h2>GoogleNet</h2>
            {Render3()}
            <p>{l3}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ML
