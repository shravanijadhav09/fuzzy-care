import { FaCircleCheck } from "react-icons/fa6";


function ReasonsCard({ reasons }) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">


      <h2 className="text-xl font-semibold text-slate-800 mb-5">
        Analysis Reasons
      </h2>


      {reasons && reasons.length > 0 ? (

        <ul className="space-y-3">

          {reasons.map((reason, index) => (

            <li
              key={index}
              className="flex items-start gap-3 text-gray-600"
            >

              <FaCircleCheck className="text-blue-500 mt-1" />

              <span>
                {reason}
              </span>

            </li>

          ))}

        </ul>

      ) : (

        <p className="text-gray-500">
          No reasons available.
        </p>

      )}


    </div>

  );

}


export default ReasonsCard;