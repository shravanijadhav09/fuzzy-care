def generate_suggestions(category):
    
    if category == "Low":
        return [
            "Maintain a healthy lifestyle.",
            "Continue regular health monitoring.",
            "Stay hydrated."
        ]

    elif category == "Medium":
        return [
            "Monitor your vital signs regularly.",
            "Get adequate rest and hydration.",
            "Consult a healthcare professional if symptoms worsen."
        ]

    return [
        "Seek medical attention promptly.",
        "Monitor oxygen saturation closely.",
        "Avoid strenuous physical activity.",
        "Follow medical advice immediately."
    ]