RISK_VALUES = {
    "Low": 20,
    "Medium": 50,
    "High": 80
}


def defuzzify(risk):
    """
    Convert fuzzy output into a crisp risk score
    using the weighted average method.
    """

    numerator = (
        risk["Low"] * RISK_VALUES["Low"] +
        risk["Medium"] * RISK_VALUES["Medium"] +
        risk["High"] * RISK_VALUES["High"]
    )

    denominator = (
        risk["Low"] +
        risk["Medium"] +
        risk["High"]
    )

    if denominator == 0:
        return 0

    return numerator / denominator


def risk_category(score):

    if score < 35:
        return "Low"

    elif score < 65:
        return "Medium"

    else:
        return "High"