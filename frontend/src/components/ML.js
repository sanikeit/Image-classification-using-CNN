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

  const firstFive = (arr) => {
    const class_names = [
      'airplane',
      'automobile',
      'bird',
      'cat',
      'deer',
      'dog',
      'frog',
      'horse',
      'ship',
      'truck'
    ]
    let res = []
    for (let i = 0; i < arr.length; i += 1) {
      let percentage = parseFloat(arr[i]) * 100
      res.push([percentage.toFixed(2), class_names[i]])
    }

    let sorted_arr = res.sort(function (a, b) {
      return b[0] - a[0]
    })

    let ff = sorted_arr.slice(0, 4)
    return ff
  }

  useEffect(() => {
    if (filename.name)
      axios
        .get('http://localhost:8000/lenet', {
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
                  setl2(firstFive(res.data.response))
                })
              setl3(firstFive(res.data.response))
            })
          setl1(firstFive(res.data.response))
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
            <p>
              {l1.map(function (item, i) {
                return (
                  <li key={i}>
                    {item[0]}% {item[1]}
                  </li>
                )
              })}
            </p>
          </div>
          <div>
            <h2>VGG16</h2>
            {Render2()}
            <p>
              {l2.map(function (item, i) {
                return (
                  <li key={i}>
                    {item[0]}% {item[1]}
                  </li>
                )
              })}
            </p>
          </div>
          <div>
            <h2>GoogleNet</h2>
            {Render3()}
            <p>
              {l3.map(function (item, i) {
                return (
                  <li key={i}>
                    {item[0]}% {item[1]}
                  </li>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ML
