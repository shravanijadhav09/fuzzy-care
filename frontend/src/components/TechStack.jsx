
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaServer,
  FaCode,
  FaPalette,
} from "react-icons/fa";


const technologies = [

  {
    icon: <FaPython size={35} />,
    name: "Python",
    description: "Core language for fuzzy logic implementation",
  },
  {
    icon: <FaServer size={35} />,
    name: "FastAPI",
    description: "High performance backend API framework",
  },
  {
    icon: <FaReact size={35} />,
    name: "React",
    description: "Modern responsive frontend interface",
  },
  {
    icon: <FaPalette size={35} />,
    name: "Tailwind CSS",
    description: "Utility-first styling framework",
  },
  {
    icon: <FaCode size={35} />,
    name: "NumPy",
    description: "Mathematical computation support",
  },
  {
    icon: <FaDatabase size={35} />,
    name: "Mamdani Fuzzy Logic",
    description: "Rule-based risk evaluation engine",
  },

];


function TechStack() {

  return (

    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-800">
            Technology Stack
          </h2>

          <p className="mt-3 text-gray-600">
            Built using modern technologies for an explainable AI-based healthcare system.
          </p>

        </div>



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {technologies.map((tech, index) => (

            <div
              key={index}
              className="
                border
                border-slate-200
                rounded-2xl
                p-6
                flex
                items-center
                gap-5
                hover:shadow-lg
                transition
              "
            >

              <div className="text-blue-600">
                {tech.icon}
              </div>


              <div>

                <h3 className="text-xl font-semibold text-slate-800">
                  {tech.name}
                </h3>

                <p className="text-gray-600 mt-1 text-sm">
                  {tech.description}
                </p>

              </div>


            </div>

          ))}


        </div>


      </div>

    </section>

  );
}


export default TechStack;