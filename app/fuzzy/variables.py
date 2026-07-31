from app.fuzzy.membership import triangular, trapezoidal

def heart_rate_membership(hr):
    
    low = triangular(hr,40,60,80)
    normal = triangular(hr,60,80,100)
    high = trapezoidal(hr,90,110,140,180)

    return {
        "Low":low,
        "Normal":normal,
        "High":high
    }

def blood_pressure_membership(bp):
    low = trapezoidal(bp, 60, 70, 80, 90)
    normal = triangular(bp, 80, 100, 120)
    high = trapezoidal(bp, 110, 130, 160, 180)

    return {
        "Low": low,
        "Normal": normal,
        "High": high
    }

def spo2_membership(spo2):
    
    low = trapezoidal(spo2,60,70,90,95)
    normal = trapezoidal(spo2,94,96,100,100)

    return {
        "Low":low,
        "Normal":normal
    }

def temperature_membership(temp):
    low = triangular(temp, 34, 35, 36.5)
    normal = triangular(temp, 36, 37, 38)
    high = trapezoidal(temp, 37.5, 38.5, 41, 42)

    return {
        "Low": low,
        "Normal": normal,
        "High": high
    }

def respiratory_rate_membership(rr):
    
    low = triangular(rr,8,12,16)
    normal = triangular(rr,12,16,20)
    high = trapezoidal(rr,18,22,40,80)

    return {
        "Low":low,
        "Normal":normal,
        "High":high
    }

if __name__ == "__main__":
    
    print("Heart Rate:")
    print(heart_rate_membership(95))

    print("\nBlood Pressure:")
    print(blood_pressure_membership(145))

    print("\nSpO2:")
    print(spo2_membership(92))

    print("\nTemperature:")
    print(temperature_membership(38.5))

    print("\nRespiratory Rate:")
    print(respiratory_rate_membership(24))