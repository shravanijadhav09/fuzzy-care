def triangular(x, a, b, c):
    """
    Triangular membership function.
    """

    if x <= a or x >= c:
        return 0.0

    elif a < x < b:
        return (x - a) / (b - a)

    elif b <= x < c:
        return (c - x) / (c - b)

    else:
        return 1.0


def trapezoidal(x, a, b, c, d):
    """
    Trapezoidal membership function.
    """

    if x <= a or x >= d:
        return 0.0

    elif a < x < b:
        return (x - a) / (b - a)

    elif b <= x <= c:
        return 1.0

    elif c < x < d:
        return (d - x) / (d - c)

    else:
        return 0.0