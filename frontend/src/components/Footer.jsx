import { FaHeartbeat, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {

  return (

    <footer className="bg-slate-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-6">


        <div className="grid md:grid-cols-3 gap-10">


          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <FaHeartbeat className="text-blue-400 text-3xl" />

              <h2 className="text-2xl font-bold">
                FuzzyCare
              </h2>

            </div>


            <p className="mt-4 text-gray-400 leading-7">

              A fuzzy logic-based clinical decision support system
              for explainable patient risk assessment.

            </p>

          </div>



          {/* Project */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Project
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>
                Fuzzy Logic Engine
              </li>

              <li>
                Risk Assessment
              </li>

              <li>
                Explainable Results
              </li>

            </ul>

          </div>



          {/* Connect */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Built By
            </h3>


            <p className="text-gray-400">
              Shravani Jadhav
            </p>


            <div className="flex gap-5 mt-5">


              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={25}/>
              </a>


              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={25}/>
              </a>


            </div>

          </div>


        </div>



        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500">

          © 2026 FuzzyCare. Built for academic project demonstration.

        </div>


      </div>


    </footer>

  );

}


export default Footer;