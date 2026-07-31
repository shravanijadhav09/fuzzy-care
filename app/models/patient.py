from pydantic import BaseModel

class PatientData(BaseModel):
    heart_rate: float
    blood_pressure: float
    spo2: float
    temperature: float
    respiratory_rate: float