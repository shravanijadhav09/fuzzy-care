from fastapi import APIRouter
from app.models.patient import PatientData
from app.fuzzy.engine import calculate_risk
from app.database.connection import prediction_collection
from datetime import datetime
from bson import ObjectId


router = APIRouter()


@router.get("/")
def home():
    return {
        "message": "Welcome to FuzzyCare API"
    }


@router.post("/predict")
def predict(patient: PatientData):

    # Calculate fuzzy risk
    result = calculate_risk(patient)


    # Data to store in MongoDB
    prediction_data = {
        "heart_rate": patient.heart_rate,
        "blood_pressure": patient.blood_pressure,
        "spo2": patient.spo2,
        "temperature": patient.temperature,
        "respiratory_rate": patient.respiratory_rate,

        "risk_score": result["risk_score"],
        "risk_category": result["risk_category"],

        "created_at": datetime.now()
    }


    # Insert into MongoDB
    prediction_collection.insert_one(prediction_data)


    return result

@router.get("/history")
def get_history():

    predictions = list(
        prediction_collection.find()
    )

    for prediction in predictions:
        prediction["_id"] = str(prediction["_id"])

    return predictions