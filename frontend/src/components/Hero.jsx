import { useState } from "react";

function Hero() {
  const [name, setName] = useState("");

  const handleStart = () => {
    console.log(name);
    // Navigation will be added later
  };

  return (
    <section className="bg-slate-50 min-h-[85vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-600 uppercase font-semibold tracking-wider">
              FuzzyCare
            </span>

            <h1 className="text-5xl font-bold text-slate-800 leading-tight mt-4">

              A Fuzzy Logic-Based

              <br />

              Clinical Decision

              <br />

              Support System

            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Assess patient health risk using
              vital signs through explainable
              Mamdani fuzzy inference.

            </p>

            <input
              type="text"
              placeholder="Enter Your Name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-8 w-full md:w-96 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleStart}
              className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Begin Assessment
            </button>

          </div>

          {/* Right */}

          {/* Right */}

<div className="hidden lg:flex justify-center">

  <div className="bg-white rounded-3xl shadow-2xl w-[420px] p-8">

    <div className="flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Patient Dashboard
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Sample Patient Assessment
        </p>
      </div>

      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
        🩺
      </div>

    </div>

    <div className="mt-8 space-y-5">

      <div className="flex justify-between">
        <span className="text-gray-500">Heart Rate</span>
        <span className="font-semibold">82 bpm</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Blood Pressure</span>
        <span className="font-semibold">120 / 80</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">SpO₂</span>
        <span className="font-semibold text-green-600">98%</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Temperature</span>
        <span className="font-semibold">36.8°C</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Respiratory Rate</span>
        <span className="font-semibold">18 rpm</span>
      </div>

    </div>

    <div className="mt-10 bg-green-100 rounded-xl p-4 text-center">

      <p className="text-sm text-gray-600">
        Current Assessment
      </p>

      <h3 className="text-3xl font-bold text-green-700 mt-2">
        LOW RISK
      </h3>

      <p className="text-gray-500 mt-2">
        Risk Score: 24%
      </p>

    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;