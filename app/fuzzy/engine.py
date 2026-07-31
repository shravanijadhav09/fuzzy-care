from app.fuzzy.variables import (
    heart_rate_membership,
    blood_pressure_membership,
    spo2_membership,
    temperature_membership,
    respiratory_rate_membership
)

from app.fuzzy.inference import infer
from app.fuzzy.defuzzification import (
    defuzzify,
    risk_category
)
from app.fuzzy.explanation import generate_reasons

from app.fuzzy.suggestions import generate_suggestions


def calculate_risk(patient):

    # Step 1: Fuzzification
    hr = heart_rate_membership(patient.heart_rate)
    bp = blood_pressure_membership(patient.blood_pressure)
    spo2 = spo2_membership(patient.spo2)
    temp = temperature_membership(patient.temperature)
    rr = respiratory_rate_membership(patient.respiratory_rate)

    # Generate Reasons
    reasons = generate_reasons(
        hr,
        bp,
        spo2,
        temp,
        rr
    )

    # Step 2: Inference
    risk = infer(hr, bp, spo2, temp, rr)

    # Step 3: Defuzzification
    score = defuzzify(risk)

    # Step 4: Risk Category
    category = risk_category(score)

    suggestions = generate_suggestions(category)

    
    return {
        "input": {
            "heart_rate": patient.heart_rate,
            "blood_pressure": patient.blood_pressure,
            "spo2": patient.spo2,
            "temperature": patient.temperature,
            "respiratory_rate": patient.respiratory_rate
        },
        "fuzzy_output": risk,
        "risk_score": round(score, 2),
        "risk_category": category,
        "reasons": reasons,
        "suggestions": suggestions
    }


