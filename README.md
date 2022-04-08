# Image-classification-using-CNN
## Minor Project

This Project aims for Application of CNN , Understanding different Architectures of CNN and there accuracy.

# Architectures
  - [Lenet-5](https://www.datasciencecentral.com/lenet-5-a-classic-cnn-architecture/) It's one of the first Cnn Architecture.
  - [VGG-16]
  - [GoogleNet]

# DataSet
  [Cifar-10](https://www.cs.toronto.edu/~kriz/cifar.html)
  
# Install

This project requires **Python** and the following Python libraries installed:

- [NumPy](http://www.numpy.org/)
- [Pandas](http://pandas.pydata.org/)
- [matplotlib](http://matplotlib.org/)
- [scikit-learn](http://scikit-learn.org/stable/)

You will also need to have software installed to run and execute a [Jupyter Notebook](http://jupyter.org/install.html).

It is highly recommended that you install the [Anaconda](https://www.anaconda.com/download/) distribution of Python, which already has the above packages and more included. 
  


# instruction to run 
1) First of all clone or download the repository and extract the repository
2) Open image classification folder.<br />
------------Backend---------------
3) Open Backend Folder and Open Terminal in that folder.
4) Run these commands in terminal.
```bash
pip install -r requirements.txt
``` 
and

```bash
python app.py
``` 
Now the Backend local host created and you can open the [localhost](http://localhost:8000/home) link. 
- You will get to see a home page where it ask to Choose File(It has to be a image type file. Eg: - Jpg, png,  etc.) and you can uppload file from your System or You can choose it from sample pictures given in the `/Image-classification-using-CNN/backend/uploads`
<br />
<br />
------------Frontend---------------<br />

5) Open Frontend Folder and Open terminal in that folder.<br />
6) Run
```bash
npm install
``` 
After Installing
```bash
npm start
``` 
7) Now Npm Started and you got a [GUI](http://localhost:3000/) link.
(Note :- You need To Start Backend app.py & then Frontend Npm and let Both of them open in terminal.)
