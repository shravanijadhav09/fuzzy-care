def generate_reasons(hr, bp, spo2, temp, rr):
    
    reasons = []

    if hr["High"] > 0.5:
        reasons.append("Heart rate is high.")

    elif hr["Low"] > 0.5:
        reasons.append("Heart rate is low.")

    if bp["High"] > 0.5:
        reasons.append("Blood pressure is high.")

    elif bp["Low"] > 0.5:
        reasons.append("Blood pressure is low.")

    if spo2["Low"] > 0.5:
        reasons.append("Oxygen saturation is low.")

    if temp["High"] > 0.5:
        reasons.append("Body temperature is elevated.")

    if rr["High"] > 0.5:
        reasons.append("Respiratory rate is high.")

    if len(reasons) == 0:
        reasons.append("All vital signs are within normal range.")

    return reasons