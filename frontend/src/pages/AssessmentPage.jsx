import { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";

import PatientForm from "../components/PatientForm";
import ResultCard from "../components/ResultCard";


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



  const handleReset = () => {

    setPatient({

      heart_rate: "",
      blood_pressure: "",
      spo2: "",
      temperature: "",
      respiratory_rate: "",

    });

    setResult(null);

    setError("");

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


          body: JSON.stringify({

            heart_rate: Number(patient.heart_rate),

            blood_pressure: Number(patient.blood_pressure),

            spo2: Number(patient.spo2),

            temperature: Number(patient.temperature),

            respiratory_rate: Number(patient.respiratory_rate),

          }),

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





      <div className="max-w-5xl mx-auto px-6 py-12">



        <PatientForm

          patient={patient}

          handleChange={handleChange}

          handleSubmit={handleSubmit}

          handleReset={handleReset}

          loading={loading}

        />



        {
          error && (

            <p className="text-red-500 mt-5">

              {error}

            </p>

          )
        }




        <ResultCard

          result={result}

        />



      </div>



    </div>


  );

}


export default AssessmentPage;