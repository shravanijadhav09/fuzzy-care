import {
  FaBrain,
  FaHeartbeat,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";


const features = [
  {
    icon: <FaBrain size={32} />,
    title: "Fuzzy Logic Based",
    description:
      "Uses Mamdani fuzzy inference to analyze patient risk instead of rigid threshold-based decisions.",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Vital Sign Analysis",
    description:
      "Evaluates important parameters like heart rate, blood pressure, SpO₂, temperature and respiratory rate.",
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Risk Prediction",
    description:
      "Generates an understandable risk score with Low, Medium, and High risk categories.",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Smart Suggestions",
    description:
      "Provides insights based on detected health parameters and fuzzy rules.",
  },
];


function Features() {

  return (

    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-800">
            Features
          </h2>

          <p className="mt-3 text-gray-600">
            Key capabilities that make FuzzyCare an explainable clinical support system.
          </p>

        </div>



        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {features.map((feature, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-6
                shadow-md
                hover:shadow-xl
                transition
              "
            >

              <div className="text-blue-600 mb-5">
                {feature.icon}
              </div>


              <h3 className="text-xl font-semibold text-slate-800">
                {feature.title}
              </h3>


              <p className="mt-3 text-gray-600 leading-6">
                {feature.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>

  );
}


export default Features;