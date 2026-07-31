import { FaHeartbeat } from "react-icons/fa";


function PatientForm({
  patient,
  handleChange,
  handleSubmit,
  loading
}) {

  return (

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


export default PatientForm;