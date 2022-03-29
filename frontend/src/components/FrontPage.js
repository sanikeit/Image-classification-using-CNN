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
                  <img
                    src="/images/person1.jfif"
                    alt="person1"
                    className="img2"
                  />
                </div>
                <h3>190001003</h3>
              </div>
              <div className="table-col color1">
                <h2>Krishanu</h2>
                <div>
                  <img
                    src="/images/person2.jfif"
                    alt="person1"
                    className="img2"
                  />
                </div>
                <h3>190001029</h3>
              </div>
              <div className="table-col color1">
                <h2>Mounika</h2>
                <div>
                  <img
                    src="/images/person1.jfif"
                    alt="person1"
                    className="img2"
                  />
                </div>
                <h3>190001036</h3>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>

      <div className="table-col">
        <div className="title-div">
          <h1>
            <span>PROBLEM STATEMENT</span>
          </h1>
        </div>
        <div className="table-col medium">
          <div>
            <h2>Introduction</h2>
          </div>
          <div>
            The Image Classification problem is the task of assigning an input
            image one label from a fixed set of categories. This is one of the
            core problems in Computer Vision that, despite its simplicity, has a
            large variety of practical applications.
          </div>
          <Slide direction="left">
            <div>
              <img src="/images/classify1.png" alt="classify" />
            </div>
          </Slide>
        </div>
        <div className="table-col medium">
          <div>
            <h2>Challenges</h2>
          </div>
          <div>
            The Image Classifiers today often fail on trivial tasks such as
            identifying a dog from a cat. The machine learning although learns
            patterns quite fast, but is unable to deduce the context in which
            image is presented. Certain factors like lighting, orientation and
            noise in the image can lead to very abnormal results. We need to
            take steps to prevent overfitting and underfitting while training.
          </div>
          <Slide direction="right">
            <div>
              <img src="/images/challenges.jpeg" alt="Challenges" />
            </div>
          </Slide>
          <Slide direction="right">
            <div>
              <img src="/images/dogtiger.jpg" alt="Challenges" className="img1" />
            </div>
          </Slide>
        </div>

        <div className="table-col medium">
          <div>
            <h2>The image classification pipeline</h2>
          </div>
          <div>
            We’ve seen that the task in Image Classification is to take an (32 X
            32 X 3) array of pixels that represents a single image and assign a
            label to it.
            <br />
            Our complete pipeline can be explained as follows:
            <ul>
              <li>
                <b>Input</b>
                <br /> Our input consists of a set of N images, each labeled
                with one of K different classes. We refer to this data as the
                training set.
              </li>
              <li>
                <b>Learning</b>
                <br /> Our task is to use the training set to learn what every
                one of the classes looks like. We refer to this step as training
                a classifier.
              </li>
              <li>
                <b>Evaluation</b>
                <br /> In the end, we evaluate the quality of the classifier by
                asking it to predict labels for a new set of images that it has
                never seen before. We will then compare the true labels of these
                images to the ones predicted by the classifier.
              </li>
            </ul>
          </div>
          <Slide direction="left">
            <div>
              <img src="/images/mlarch.png" alt="Challenges" />
            </div>
          </Slide>
        </div>
      </div>

      <div className="table-col">
        <div className="title-div">
          <h1>
            <span>Dataset</span>
          </h1>
        </div>
        <div className="table">
          <div className="table-col medium">
            <div>
              The CIFAR-10 dataset consists of 60000 32x32 colour images in 10
              classes, with 6000 images per class. There are 50000 training
              images and 10000 test images. <br />
              <br />
              The dataset is divided into five training batches and one test
              batch, each with 10000 images. The test batch contains exactly
              1000 randomly-selected images from each class. <br />
              <br />
              Here are the classes in the dataset, as well as 10 random images
              from each:
            </div>
            <Zoom>
              <div>
                <img src="/images/cifar10.jpg" alt="cifar10" />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  )
}

export default FrontPage
