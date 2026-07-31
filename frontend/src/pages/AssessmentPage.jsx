import { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import RiskMeter from "../components/RiskMeter";
import ReasonsCard from "../components/ReasonsCard";
import Suggestions from "../components/Suggestions";

function AssessmentPage() {

  const [patient, setPatient] = useState({
    heart_rate: "",
    blood_pressure: "",
    spo2: "",
    temperature: "",
    respiratory_rate: "",
  });

  const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

  const handleChange = (e) => {

    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });

  };

const handleSubmit = async () => {

  try {

    setLoading(true);
    setError("");

    const response = await fetch(
      "http://127.0.0.1:8000/predict",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(patient),
      }
    );


    const data = await response.json();

    setResult(data);


  } catch (err) {

    setError("Unable to connect with server");

  } finally {

    setLoading(false);

  }

};
  return (

    <div className="min-h-screen bg-slate-50">


      {/* Header */}

      <div className="bg-white shadow-sm py-6">

        <div className="max-w-5xl mx-auto px-6 flex items-center gap-3">

          <FaHeartbeat className="text-blue-600 text-3xl"/>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Patient Risk Assessment
            </h1>

            <p className="text-gray-500">
              Enter patient vital information for fuzzy risk analysis.
            </p>

          </div>

        </div>

      </div>



      {/* Form */}

      <div className="max-w-5xl mx-auto px-6 py-12">


        <div className="bg-white rounded-2xl shadow-md p-8">


          <h2 className="text-xl font-semibold text-slate-800 mb-8">
            Patient Vitals
          </h2>



          <div className="grid md:grid-cols-2 gap-6">


            <InputField
              label="Heart Rate (BPM)"
              name="heart_rate"
              value={patient.heart_rate}
              onChange={handleChange}
            />


            <InputField
              label="Blood Pressure (mmHg)"
              name="blood_pressure"
              value={patient.blood_pressure}
              onChange={handleChange}
            />


            <InputField
              label="SpO₂ (%)"
              name="spo2"
              value={patient.spo2}
              onChange={handleChange}
            />


            <InputField
              label="Temperature (°C)"
              name="temperature"
              value={patient.temperature}
              onChange={handleChange}
            />


            <InputField
              label="Respiratory Rate"
              name="respiratory_rate"
              value={patient.respiratory_rate}
              onChange={handleChange}
            />


          </div>



         <button
  onClick={handleSubmit}
  className="
    mt-10
    w-full
    bg-blue-600
    text-white
    py-3
    rounded-xl
    font-semibold
    hover:bg-blue-700
    transition
  "
>
  {loading ? "Analyzing..." : "Calculate Risk"}
</button>


        </div>

    {
  result && (

    <div className="mt-10">

      <RiskMeter
        score={result.risk_score}
        category={result.risk_category}
      />


     <ReasonsCard
  reasons={result?.reasons || []}
/>


<Suggestions
  suggestions={result?.suggestions || []}
/>


    </div>

  )
}


      </div>


    </div>

  );

}



function InputField({
  label,
  name,
  value,
  onChange
}) {


  return (

    <div>

      <label className="block text-sm font-medium text-gray-700 mb-2">

        {label}

      </label>


      <input

        type="number"

        name={name}

        value={value}

        onChange={onChange}

        className="
          w-full
          border
          border-slate-300
          rounded-xl
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "

        placeholder={`Enter ${label}`}

      />


    </div>

  );

}



export default AssessmentPage;