import numpy as np
import pandas as pd

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy import Column, Integer, String, Float, Date, Numeric

from flask import Flask, jsonify, render_template, jsonify, request, redirect
from flask_restful import Api
from predict import Predict
import requests
import os


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

# inputfields:
# 'AGE2',
#  'IRMARIT',
#  'HEALTH',
#  'MOVSINPYR2',
#  'SEXATRACT',
#  'SEXIDENT',
#  'DIFFTHINK',
#  'IREDUHIGHST2',
#  'WRKSTATWK2',
#  'IRWRKSTAT',
#  'WRKNUMJOB2',
#  'IRPINC3',
#  'CIG100LF',
#  'ALCUS30D',
#  'CIGTRY',
#  'CG30EST',

#  result fields:
#  'ALCDAYS',
#  'COCEVER',
#  'CRKEVER',
#  'MJEVER',
#  'HEREVER',
#  'METHAMEVR',
#  'PNRANYLIF',
#  'TRQANYLIF',
#  'STMANYLIF',
#  'SEDANYLIF', 
#  'halluciogens', 
#  'inhalants',
#  'not_mental'

# Load prebuilt model
SMOKE_MODEL = joblib.load('Predictions/Smoking_LogRegr_final.smd')
# ALCOHOL_MODEL = joblib.load('Smoking_LogRegr_final.smd')
# MENTAL_MODEL = joblib.load('Smoking_LogRegr_final.smd')
# COC_MODEL = joblib.load('Drugs_LogRegr_final_coc.smd')
# CRK_MODEL = joblib.load('Drugs_LogRegr_final_crk.smd')
# HALL_MODEL = joblib.load('Drugs_LogRegr_final_hall.smd')
# HER_MODEL = joblib.load('Drugs_LogRegr_final_her.smd')
# INHALENTS_MODEL = joblib.load('Drugs_LogRegr_final_inhalants.smd')
# METH_MODEL = joblib.load('Drugs_LogRegr_final_meth.smd')
# MJ_MODEL = joblib.load('Drugs_LogRegr_final_MJ.smd')
# PNR_MODEL = joblib.load('Drugs_LogRegr_final_pnr.smd')
# SED_MODEL = joblib.load('Drugs_LogRegr_final_sed.smd')
# TRK_MODEL = joblib.load('Drugs_LogRegr_final_trq.smd')

# receiving the json file from the app.js
@app.route("/api/smoke_model", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        if not request.json: 
            abort(400)
        input = {
            'AGE2': request.json['AGE2'],
            'IRMARIT': request.json['IRMARIT'],
            'HEALTH': request.json['HEALTH'],
            'MOVSINPYR2': request.json['MOVSINPYR2'],
            'SEXATRACT': request.json['SEXATRACT'],
            'SEXIDENT': request.json['SEXIDENT'],
            'DIFFTHINK': request.json['DIFFTHINK'],
            'IREDUHIGHST2': request.json['IREDUHIGHST2'],
            'WRKSTATWK2': request.json['WRKSTATWK2'],
            'WRKNUMJOB2': request.json['WRKNUMJOB2'],
            'IRWRKSTAT': request.json['IRWRKSTAT'],
            'IRPINC3': request.json['IRPINC3'],
            'CIG100LF': request.json['CIG100LF'],
            'CIGTRY': request.json['CIGTRY'],
            'ALCUS30D': request.json['ALCUS30D']
        }
        result = yourModel.predict(input)
        return jsonify({'smoke_result': smoke_result}), 200 # return success 
    return 'To use the survey, please answer all questions.' # message to input info/ usage information


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
