import React from 'react'
import { Fade, Zoom, Slide } from 'react-awesome-reveal'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import './ModelAnalysis.css'
import { GoogleNet, Lenet, Vgg16 } from './snips/codes'
import { LeNet_graph, Vgg_graph, GoogleNet_graph } from './snips/graphData'

import Graph from '../utils/Graph'

function ModelAnalysis() {
  const googleNet = GoogleNet
  const lenet = Lenet
  const vgg16 = Vgg16

  return (
    <>
      <div className="table-col">
        <Zoom triggerOnce="true">
          <div className="title-div">
            <h1>
              <span>CNN</span>
            </h1>
          </div>
          <div className="table">
            <h2>Model Analysis</h2>
          </div>
        </Zoom>
      </div>

      <div className="table">
        <img src="/images/cnn1.png" alt="cnn" className="" />
      </div>

      <Carousel emulateTouch="true">
        <div className="table-col information">
          <h2>LeNet</h2>
          <div>Most basic CNN architecture.</div>
          <div>
            <img src="/images/lenet5.png" alt="cnn" className="img2" />
          </div>
          <div className="left-align">
            <SyntaxHighlighter language="python" style={dracula}>
              {lenet}
            </SyntaxHighlighter>
          </div>
          <div>
            <Graph data={LeNet_graph} />
          </div>
        </div>
        <div className="table-col information">
          <h2>VGG</h2>
          <div>
            First Deep CNN architecture with high accuracy and efficiency.
          </div>
          <div>
            <img src="/images/vgg16.png" alt="cnn" className="img2" />
          </div>
          <div className="left-align">
            <SyntaxHighlighter language="python" style={dracula}>
              {vgg16}
            </SyntaxHighlighter>
          </div>
          <div>
            <Graph data={Vgg_graph} />
          </div>
        </div>
        <div className="table-col information">
          <h2>GoogleNet</h2>
          <div>
            Based on the Hebbian principle:{' '}
            <i>“Neurons that fire together, wire together”</i>.
          </div>
          <div>
            <img src="/images/googlenet2.png" alt="cnn" className="img2" />
          </div>
          <div className="left-align">
            <SyntaxHighlighter language="python" style={dracula}>
              {googleNet}
            </SyntaxHighlighter>
          </div>
          <div>
            <Graph data={GoogleNet_graph} />
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default ModelAnalysis
