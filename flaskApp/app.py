from flask import Flask, render_template, request
import imageio as iio
import numpy as np
import keras.models
import cv2
import re
import sys 
import os
import base64
from load import * 


global graph, model

model, graph = init()

app = Flask(__name__)


@app.route('/')
def index_view():
    return render_template('index.html')

def convertImage(imgData1):
	imgstr = re.search(b'base64,(.*)',imgData1).group(1)
	with open('output.png','wb') as output:
	    output.write(base64.b64decode(imgstr))

@app.route('/predict/',methods=['GET','POST'])
def predict():
  # imgData = request.get_data()
  # convertImage(imgData)
  
  x = cv2.imread('images/airplane1.png', cv2.IMREAD_GRAYSCALE)
  # print(x)
  # x = np.invert(x)
  res = cv2.resize(x, dsize=(32, 32), interpolation=cv2.INTER_CUBIC)
  res = res.reshape(1,32,32,1)
  class_names = ["airplane","automobile","bird","cat","deer","dog","frog","horse","ship","truck"]
  with graph.as_default():
        json_file = open('model/model.json','r')
        loaded_model_json = json_file.read()
        json_file.close()
        loaded_model = model_from_json(loaded_model_json)
        #load weights into new model
        loaded_model.load_weights("model/model.h5")
        print("Loaded Model from disk")
        #compile and evaluate loaded model
        loaded_model.compile(loss=['categorical_crossentropy', 'categorical_crossentropy', 'categorical_crossentropy'] ,optimizer='adam',metrics=['accuracy'])
        # perform the prediction
        out = loaded_model.predict(res)
        out = np.array(out[0])
        print(out.shape)
        # convert the response to a string
        response = class_names[np.argmax(out, axis=1)[0]]
        return str(response)

if __name__ == '__main__':
    app.run(debug=True, port=8000)
