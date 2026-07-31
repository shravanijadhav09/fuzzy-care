def evaluate_rules(hr, bp, spo2, temp, rr):
    
    risk = {
        "Low": 0.0,
        "Medium": 0.0,
        "High": 0.0
    }

    # Rule 1
    # IF Heart Rate is High AND Blood Pressure is High
    # THEN Risk is High
    risk["High"] = max(risk["High"], min(hr["High"], bp["High"]))

    # Rule 2
    # IF SpO2 is Low
    # THEN Risk is High
    risk["High"] = max(risk["High"], spo2["Low"])

    # Rule 3
    # IF Temperature is High AND Respiratory Rate is High
    # THEN Risk is High
    risk["High"] = max(risk["High"], min(temp["High"], rr["High"]))

    # Rule 4
    # IF Blood Pressure is Low AND Heart Rate is High
    # THEN Risk is High
    risk["High"] = max(risk["High"], min(bp["Low"], hr["High"]))

    # Rule 5
    # IF Heart Rate is Low AND Blood Pressure is Low
    # THEN Risk is High
    risk["High"] = max(risk["High"], min(hr["Low"], bp["Low"]))

    # Rule 6
    # IF Temperature is High
    # THEN Risk is Medium
    risk["Medium"] = max(risk["Medium"], temp["High"])

    # Rule 7
    # IF Respiratory Rate is High
    # THEN Risk is Medium
    risk["Medium"] = max(risk["Medium"], rr["High"])

    # Rule 8
    # IF Heart Rate is High AND Temperature is High
    # THEN Risk is High
    risk["High"] = max(risk["High"], min(hr["High"], temp["High"]))

    # Rule 9
    # IF Blood Pressure is High AND Temperature is High
    # THEN Risk is High
    risk["High"] = max(risk["High"], min(bp["High"], temp["High"]))

    # Rule 10
    # IF Heart Rate is Normal AND Blood Pressure is Normal
    # AND SpO2 is Normal
    # THEN Risk is Low
    risk["Low"] = max(
        risk["Low"],
        min(
            hr["Normal"],
            bp["Normal"],
            spo2["Normal"]
        )
    )

    # Rule 11
    # IF Temperature is Normal AND Respiratory Rate is Normal
    # THEN Risk is Low
    risk["Low"] = max(
        risk["Low"],
        min(
            temp["Normal"],
            rr["Normal"]
        )
    )

    # Rule 12
    # IF Heart Rate, Blood Pressure, SpO2,
    # Temperature and Respiratory Rate are Normal
    # THEN Risk is Low
    risk["Low"] = max(
        risk["Low"],
        min(
            hr["Normal"],
            bp["Normal"],
            spo2["Normal"],
            temp["Normal"],
            rr["Normal"]
        )
    )

    return risk