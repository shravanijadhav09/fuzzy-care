import numpy as np

from app.fuzzy.membership import triangular, trapezoidal


def defuzzify(risk):
    """
    Centroid Defuzzification (Mamdani Method)

    Converts aggregated fuzzy output into
    a crisp risk score (0–100).
    """

    universe = np.arange(0, 101, 1)

    output_membership = []

    for x in universe:

        # Output Membership Functions

        low = trapezoidal(
            x,
            0,
            0,
            20,
            40
        )

        medium = triangular(
            x,
            30,
            50,
            70
        )

        high = trapezoidal(
            x,
            60,
            75,
            100,
            100
        )

        # Mamdani Aggregation
        aggregated = max(
            min(risk["Low"], low),
            min(risk["Medium"], medium),
            min(risk["High"], high)
        )

        output_membership.append(aggregated)

    numerator = sum(
        x * mu
        for x, mu in zip(universe, output_membership)
    )

    denominator = sum(output_membership)

    if denominator == 0:
        return 0

    return round(numerator / denominator, 2)


def risk_category(score):
    
    if score < 40:
        return "Low"

    elif score < 65:
        return "Medium"

    return "High"