import { useState } from "react";

function Hero() {

  const [name, setName] = useState("");

  return (

    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="text-blue-600 font-semibold uppercase">
            FuzzyCare
          </span>

          <h1 className="text-5xl font-bold mt-4 leading-tight">

            A Fuzzy Logic-Based

            <br />

            Clinical Decision

            <br />

            Support System

          </h1>

          <p className="mt-6 text-lg text-gray-600">

            Assess patient health risk using vital signs
            through explainable Mamdani Fuzzy Logic.

          </p>

          <input
            type="text"
            placeholder="Enter Your Name (Optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-8 w-full md:w-96 border rounded-xl p-4"
          />

          <button className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">

            Begin Assessment

          </button>

        </div>

        <div>

          <div className="bg-white rounded-3xl shadow-lg h-[400px] flex items-center justify-center">

            <div className="text-center">

              <div className="text-8xl">
                ❤️
              </div>

              <h2 className="text-2xl font-bold mt-6">
                Medical Dashboard
              </h2>

              <p className="text-gray-500 mt-3">
                Illustration will be added later
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;