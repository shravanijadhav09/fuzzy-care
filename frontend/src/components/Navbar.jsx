import { FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();


  return (

    <nav className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        <div className="flex items-center gap-3">

          <FaHeartbeat className="text-red-500 text-3xl" />


          <div>

            <h1 className="text-2xl font-bold text-slate-800">
              FuzzyCare
            </h1>


            <p className="text-sm text-gray-500">
              Clinical Decision Support System
            </p>

          </div>


        </div>



        <button

          onClick={() => navigate("/assessment")}

          className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-blue-700
          transition
          "

        >

          Begin Assessment

        </button>


      </div>

    </nav>

  );

}


export default Navbar;