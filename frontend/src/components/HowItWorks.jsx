import {
  FaUserInjured,
  FaBrain,
  FaClipboardList,
  FaCogs,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";


const steps = [
  {
    icon: <FaUserInjured size={32} />,
    title: "Patient Vitals",
  },
  {
    icon: <FaBrain size={32} />,
    title: "Fuzzification",
  },
  {
    icon: <FaClipboardList size={32} />,
    title: "Rule Base",
  },
  {
    icon: <FaCogs size={32} />,
    title: "Inference",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Defuzzification",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Risk Score",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Suggestions",
  },
];


function HowItWorks() {

  return (

    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-800">
            How It Works
          </h2>

          <p className="mt-3 text-gray-600">
            Follow the complete fuzzy logic workflow used for patient risk assessment.
          </p>

        </div>



        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">


          {steps.map((step, index) => (

            <div 
              key={index}
              className="flex flex-col lg:flex-row items-center"
            >


              <div className="
                bg-slate-50
                rounded-2xl
                shadow-md
                p-6
                w-48
                h-44
                flex
                flex-col
                justify-center
                items-center
                text-center
                hover:shadow-lg
                transition
              ">


                <div className="text-blue-600 mb-4">
                  {step.icon}
                </div>


                <h3 className="font-semibold text-slate-800">
                  {step.title}
                </h3>


              </div>



              {index !== steps.length - 1 && (

                <>

                  {/* Desktop */}
                  <FaArrowRight
                    size={25}
                    className="hidden lg:block text-blue-500 mx-3"
                  />


                  {/* Mobile */}
                  <FaArrowDown
                    size={25}
                    className="lg:hidden text-blue-500 my-3"
                  />


                </>

              )}


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}


export default HowItWorks;