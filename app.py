import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, Date, Numeric

from flask import Flask, jsonify, render_template, jsonify, redirect, request
from flask_restful import Api
# from predict import Predict
import joblib
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

# Load prebuilt model
SMOKE_MODEL = joblib.load('Predictions/Smoking_LogRegr_final.smd')
ALCOHOL_MODEL = joblib.load('Predictions/Alcohol_LogRegr_final.smd')
MENTAL_MODEL = joblib.load('Predictions/MentalHealth_LogRegr_final.smd')
MJ_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_MJ.smd')
COC_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_coc.smd')
CRK_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_crk.smd')
HER_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_her.smd')
METH_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_meth.smd')
PNR_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_pnr.smd')
TRK_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_trq.smd')
STM_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_stm.smd')
SED_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_sed.smd')
HALL_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_hall.smd')
INHALENTS_MODEL = joblib.load('Predictions/Drugs_LogRegr_final_inhalants.smd')






# receiving the json file from the app.js
@app.route("/api/prediction_models", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        if not request.json: 
            abort(400)

        print(f"JSON content: {request.json}")
        myInputs = {
            'AGE2': request.json['AGE2'],
            'IRMARIT': request.json['IRMARIT'],
            'HEALTH': request.json['HEALTH'],
            'MOVSINPYR2': request.json['MOVSINPYR2'],
            'SEXATRACT': request.json['SEXATRACT'],
            'SEXIDENT': request.json['SEXIDENT'],
            'DIFFTHINK': request.json['DIFFTHINK'],
            'IREDUHIGHST2': request.json['IREDUHIGHST2'],
            'WRKSTATWK2': request.json['WRKSTATWK2'],
            'IRWRKSTAT': request.json['IRWRKSTAT'],
            'WRKNUMJOB2': request.json['WRKNUMJOB2'],
            'IRPINC3': request.json['IRPINC3'],
            'CIG100LF': request.json['CIG100LF'],
            'ALCUS30D': request.json['ALCUS30D'],
            'CIGTRY': request.json['CIGTRY']
        }
        X_new = np.fromiter(myInputs.values(), dtype=float) 
        # Generate prediction for a single value
        smoke_prediction = {'smoke_prediction': str(SMOKE_MODEL.predict([X_new])[0])}
        alcohol_prediction = {'alcohol_prediction': str(ALCOHOL_MODEL.predict([X_new])[0])}
        mental_prediction = {'mental_prediction': str(MENTAL_MODEL.predict([X_new])[0])}
        mj_prediction = {'mj_prediction': str(MJ_MODEL.predict([X_new])[0])}
        coc_prediction = {'coc_prediction': str(COC_MODEL.predict([X_new])[0])}
        crk_prediction = {'crk_prediction': str(CRK_MODEL.predict([X_new])[0])}
        her_prediction = {'her_prediction': str(HER_MODEL.predict([X_new])[0])}
        meth_prediction = {'meth_prediction': str(METH_MODEL.predict([X_new])[0])}
        pnr_prediction = {'pnr_prediction': str(PNR_MODEL.predict([X_new])[0])}
        trk_prediction = {'trk_prediction': str(TRK_MODEL.predict([X_new])[0])}
        stm_prediction = {'stm_prediction': str(STM_MODEL.predict([X_new])[0])}
        sed_prediction = {'sed_prediction': str(SED_MODEL.predict([X_new])[0])}
        hal_prediction = {'hal_prediction': str(HALL_MODEL.predict([X_new])[0])}
        inh_prediction = {'inh_prediction': str(INHALENTS_MODEL.predict([X_new])[0])}
        return jsonify(smoke_prediction, alcohol_prediction, mental_prediction, mj_prediction, coc_prediction, crk_prediction,
                her_prediction, meth_prediction, pnr_prediction, trk_prediction, stm_prediction, sed_prediction, hal_prediction, inh_prediction), 200 # return success 
    return 'To use the survey, please answer all questions.' # message to input info/ usage information

# # receiving the json file from the app.js
# @app.route("/api/additional_model", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         if not request.json: 
#             abort(400)

#         print(f"JSON content: {request.json}")
#         myInputs = {
#             'AGE2': request.json['AGE2'],
#             'IRMARIT': request.json['IRMARIT'],
#             'HEALTH': request.json['HEALTH'],
#             'MOVSINPYR2': request.json['MOVSINPYR2'],
#             'SEXATRACT': request.json['SEXATRACT'],
#             'SEXIDENT': request.json['SEXIDENT'],
#             'DIFFTHINK': request.json['DIFFTHINK'],
#             'IREDUHIGHST2': request.json['IREDUHIGHST2'],
#             'WRKSTATWK2': request.json['WRKSTATWK2'],
#             'IRWRKSTAT': request.json['IRWRKSTAT'],
#             'WRKNUMJOB2': request.json['WRKNUMJOB2'],
#             'IRPINC3': request.json['IRPINC3'],
#             'CIG100LF': request.json['CIG100LF'],
#             'ALCUS30D': request.json['ALCUS30D'],
#             'CIGTRY': request.json['CIGTRY']
#         }
#         X_new = np.fromiter(myInputs.values(), dtype=float) 
#         # Generate prediction for a single value
#         alcohol_result = {'alcohol_prediction': str(ALCOHOL_MODEL.predict([X_new])[0])}
#         return jsonify(alcohol_result), 200 # return success 
#     return 'To use the survey, please answer all questions.'

@app.route("/")
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
    app.run(debug=True, port='80')
