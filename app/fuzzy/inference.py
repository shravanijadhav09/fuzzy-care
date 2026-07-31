from app.fuzzy.rules import evaluate_rules


def infer(hr, bp, spo2, temp, rr):
    """
    Performs fuzzy inference by evaluating all rules.
    """

    risk = evaluate_rules(hr, bp, spo2, temp, rr)

    return risk