import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, Date, Numeric

from flask import Flask, jsonify, render_template
from flask import Flask
from flask_restful import Api
from predict import Predict
import requests
# from example import run_request
# from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# Database1 Setup
engine = create_engine("sqlite:///project3_raw_final.sqlite")
conn = engine.connect()
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
app = Flask(__name__)

#################################################
# Flask Routes

inputfields:
'AGE2',
 'IRMARIT',
 'HEALTH',
 'MOVSINPYR2',
 'SEXATRACT',
 'SEXIDENT',
 'DIFFTHINK',
 'IREDUHIGHST2',
 'WRKSTATWK2',
 'IRWRKSTAT',
 'WRKNUMJOB2',
 'IRPINC3',
 'CIG100LF',
 'ALCUS30D',
 'CIGTRY',
 'CG30EST',

 result fields:
 'ALCDAYS',
 'COCEVER',
 'CRKEVER',
 'MJEVER',
 'HEREVER',
 'METHAMEVR',
 'PNRANYLIF',
 'TRQANYLIF',
 'STMANYLIF',
 'SEDANYLIF', 
 'halluciogens', 
 'inhalants',
 'not_mental'
 
# Add predict to route predict
API.add_resource(Predict, '/predict') # is this to the psmoke.py to run the predication?

@app.route('/parameters/<petal_length>&<sepal_length>&<petal_width>&<sepal_width>')
def get_prediction(petal_length=5, sepal_length=5, petal_width=5, sepal_width=5):
    url = 'https://jl-uwa-demo.herokuapp.com/predict'
    body = {
        "petal_length": petal_length,
        "sepal_length": sepal_length,
        "petal_width": petal_width,
        "sepal_width": sepal_width
    }
    response = requests.post(url, data=body)
    return response.json()


# @app.route("/")
# def welcome():
#     return (
#         f"Welcome!<br/>"
#         f"Available Route:<br/>"
#         f"/api/v1.0/data"

#     )

# @app.route("/api/v1.0/data")
# def apidata():
#     """Return the data as json"""
#     # Sets an object to utilize the default declarative base in SQL Alchemy
#     Base = declarative_base()

#     # Creates Classes which will serve as the anchor points for our Tables
#     class addiction_mentalhealth(Base):
#         __tablename__ = 'training_data'
#         index = Column(Integer, primary_key=True)
#         AGE2 = Column(Integer)
#         IRMARIT = Column(Integer)
#         HEALTH = Column(Integer)
#         MOVSINPYR2 = Column(Integer)
#         SEXATRACT = Column(Integer)
#         SEXIDENT = Column(Integer)
#         IREDUHIGHST2 = Column(Integer)
#         WRKSTATWK2 = Column(Integer)
#         IRWRKSTAT = Column(Integer)
#         WRKNUMJOB2 = Column(Integer)
#         IRPINC3 = Column(Integer)
#         DIFFTHINK = Column(Integer)
#         CIG100LF = Column(Integer)
#         ALCUS30D = Column(Integer)
#         CIGTRY = Column(Integer)
#         CG30EST = Column(Integer)
#         ALCDAYS = Column(Integer)
#         MJEVER = Column(Integer)
#         COCEVER = Column(Integer)
#         CRKEVER = Column(Integer)
#         HEREVER = Column(Integer)
#         METHAMEVR = Column(Integer)
#         PNRANYLIF = Column(Integer)
#         TRQANYLIF = Column(Integer)
#         STMANYLIF = Column(Integer)
#         SEDANYLIF = Column(Integer)
#         halluciogens = Column(Integer)
#         inhalants = Column(Integer)
#         not_mental = Column(Integer)
    
#     data = session.query(addiction_mentalhealth)
#     session.close()

    # # Create a list to hold data'

    # list = []
    # for result in data:
    #     row = {}
    #     row["date"] = result.date
    #     row["latitude"] = result.latitude
    #     row["longitude"] = result.longitude
    #     row["uv_index"] = result.uv_index
    #     list.append(row)
 
    # return jsonify(list)


@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/survey")
def survey():
    return render_template('survey.html')

@app.route("/help")
def help():
    return render_template('help.html')

@app.route("/data")
def data():
    return render_template('data.html')

@app.route("/about")
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)