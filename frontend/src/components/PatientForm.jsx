import { useState } from "react";
import API from "../services/api";


function PatientForm({ setResult }) {

    const [patient, setPatient] = useState({
        heart_rate: "",
        blood_pressure: "",
        spo2: "",
        temperature: "",
        respiratory_rate: ""
    });


    const handleChange = (e) => {

        setPatient({
            ...patient,
            [e.target.name]: Number(e.target.value)
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/predict",
                patient
            );

            setResult(response.data);

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <input
                className="w-full border rounded-lg p-3"
                name="heart_rate"
                placeholder="❤️ Heart Rate"
                onChange={handleChange}
            />


            <input
                className="w-full border rounded-lg p-3"
                name="blood_pressure"
                placeholder="🩸 Blood Pressure"
                onChange={handleChange}
            />


            <input
                className="w-full border rounded-lg p-3"
                name="spo2"
                placeholder="🫁 SpO2"
                onChange={handleChange}
            />


            <input
                className="w-full border rounded-lg p-3"
                name="temperature"
                placeholder="🌡 Temperature"
                onChange={handleChange}
            />


            <input
                className="w-full border rounded-lg p-3"
                name="respiratory_rate"
                placeholder="😮‍💨 Respiratory Rate"
                onChange={handleChange}
            />


            <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg p-3"
            >
                Predict Risk
            </button>


        </form>

    );

}


export default PatientForm;