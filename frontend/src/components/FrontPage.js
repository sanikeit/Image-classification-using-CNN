import React from 'react'
import './FrontPage.css'
import { Fade, Zoom, Slide } from 'react-awesome-reveal'

function FrontPage() {
  return (
    <>
      <Fade>
        <div className="table">
          <img src="/images/ml1.jpeg" alt="ml1" className="img1" />
        </div>
      </Fade>
      <Fade>
        <div className="table-col">
          <div className="title-div">
            <h1>
              <span>CREATED BY GROUP-3</span>
            </h1>
          </div>
          <div className="table">
            <Fade>
              <div className="table-col color1">
                <h2>Anikeit</h2>
                <div>
                  <img src="/images/person1.jfif" alt="person1" className="img2" />
                </div>
                <h3>190001003</h3>
              </div>
              <div className="table-col color1">
                <h2>Krishanu</h2>
                <div>
                  <img src="/images/person2.jfif" alt="person1" className="img2" />
                </div>
                <h3>190001029</h3>
              </div>
              <div className="table-col color1">
                <h2>Mounika</h2>
                <div>
                  <img src="/images/person1.jfif" alt="person1" className="img2" />
                </div>
                <h3>190001036</h3>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>

      <Zoom>
        <div className="table">
          <img src="/images/ml2.png" alt="ml2" />
          <img src="/images/ml2.png" alt="ml2" />
          <img src="/images/ml2.png" alt="ml2" />
        </div>
      </Zoom>

      <Zoom>
        <div className="table">
          <img src="/images/cifar10.jpg" alt="cifar10" />
        </div>
      </Zoom>
    </>
  )
}

export default FrontPage
