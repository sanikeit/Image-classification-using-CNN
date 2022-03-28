from operator import index
from flask import Flask, render_template, request, redirect, flash, url_for, jsonify
import numpy as np
from keras.models import load_model
import cv2
import re
import requests
from werkzeug.utils import secure_filename
import base64
from load import * 
import os


UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

global graph, model

model, graph = init()

# app name
@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/home', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return redirect(url_for('learn', name=filename))
    return render_template('index.html')

@app.route('/learn', methods=['GET'])
def learn():
    name = request.args.get('name')
    res = requests.get('http://localhost:8000/googlenet', params = {'name': name} )
    x = (res.json()['response'])
    res = requests.get('http://localhost:8000/vgg', params = {'name': name} )
    y = (res.json()['response'])
    return render_template('learn.html', name = name, googlenet = x, vgg = y)
    
def convertImage(imgData1):
	imgstr = re.search(b'base64,(.*)',imgData1).group(1)
	with open('output.png','wb') as output:
	    output.write(base64.b64decode(imgstr))

@app.route('/googlenet/',methods=['GET','POST'])
def googlenet():
  # imgData = request.get_data()
  # convertImage(imgData)
  name = request.args.get('name')
  x = cv2.imread('uploads/' + name, cv2.IMREAD_GRAYSCALE)
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
        #compile and evaluate loaded model
        loaded_model.compile(loss=['categorical_crossentropy', 'categorical_crossentropy', 'categorical_crossentropy'] ,optimizer='adam',metrics=['accuracy'])
        # perform the prediction
        out = loaded_model.predict(res)
        out = np.array(out[0])
        # convert the response to a string
        response = class_names[np.argmax(out, axis=1)[0]]
        return jsonify(
            response=response,
        )

# scale pixels
def prep_pixels(train):
	# convert from integers to floats
	train_norm = train.astype('float32')
	# normalize to range 0-1
	train_norm = train_norm / 255.0
	# return normalized images
	return train_norm

@app.route('/vgg/', methods=['GET', 'POST'])
def vgg():
    name = request.args.get('name')
    x = cv2.imread('uploads/' + name)
    # print(x)
    # x = np.invert(x)
    res = cv2.resize(x, dsize=(32, 32), interpolation=cv2.INTER_CUBIC)
    class_names = ["airplane","automobile","bird","cat","deer","dog","frog","horse","ship","truck"]
    # load model
    model = load_model('model/VGG16_model.h5')
    trainX = prep_pixels(res)
    trainX = np.array(trainX).reshape(1, 32, 32, 3)
    out = model.predict(trainX)
    out = np.array(out)
    # convert the response to a string
    response = class_names[np.argmax(out, axis=1)[0]]
    return jsonify(
        response=response,
    )

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8000)
