import { FaLightbulb } from "react-icons/fa";


function Suggestions({ suggestions }) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">


      <div className="flex items-center gap-3 mb-5">

        <FaLightbulb className="text-yellow-500 text-2xl" />

        <h2 className="text-xl font-semibold text-slate-800">
          Recommendations
        </h2>

      </div>



      {suggestions && suggestions.length > 0 ? (

        <ul className="space-y-3">

          {suggestions.map((item, index) => (

            <li
              key={index}
              className="
                text-gray-600
                flex
                items-start
                gap-2
              "
            >

              <span className="text-green-500 font-bold">
                ✓
              </span>

              {item}

            </li>

          ))}

        </ul>

      ) : (

        <p className="text-gray-500">
          No suggestions available.
        </p>

      )}


    </div>

  );

}


export default Suggestions;