import { useState } from "react";
import PatientForm from "./components/PatientForm";


function App() {

  const [result, setResult] = useState(null);


  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          FuzzyCare 🩺
        </h1>

        <p className="text-center text-gray-600 mt-2">
          AI Clinical Risk Prediction System using Fuzzy Logic
        </p>


        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-5">
            Patient Vitals
          </h2>


          <PatientForm setResult={setResult}/>


        </div>



        {
          result && (

            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

              <h2 className="text-2xl font-semibold">
                Risk Result
              </h2>


              <div className="mt-4 space-y-3">


                <p className="text-lg">
                  Risk Score:
                  <span className="font-bold ml-2">
                    {result.risk_score}
                  </span>
                </p>


                <p className="text-lg">
                  Category:

                  <span className="font-bold ml-2 text-red-600">
                    {result.risk_category}
                  </span>

                </p>


              </div>

            </div>

          )
        }


      </div>

    </div>

  )

}


export default App;