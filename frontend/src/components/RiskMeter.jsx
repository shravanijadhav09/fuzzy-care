import { motion } from "framer-motion";


function RiskMeter({ score, category }) {


  const getColor = () => {

    if (category === "High") return "text-red-600";

    if (category === "Medium") return "text-yellow-500";

    return "text-green-600";

  };



  const getBgColor = () => {

    if (category === "High") return "bg-red-100";

    if (category === "Medium") return "bg-yellow-100";

    return "bg-green-100";

  };



  return (

    <div className="bg-white rounded-2xl shadow-md p-8 text-center">


      <h2 className="text-xl font-semibold text-slate-800 mb-6">

        Risk Assessment

      </h2>



      {/* Gauge */}

      <div className="relative w-64 h-32 mx-auto overflow-hidden">


        <div
          className="
          absolute
          w-64
          h-64
          rounded-full
          border-[25px]
          border-slate-200
          "
        />



        <motion.div

          initial={{ rotate: -90 }}

          animate={{
            rotate: -90 + (score * 1.8)
          }}

          transition={{ duration: 1 }}

          className="
          absolute
          left-1/2
          bottom-0
          origin-bottom
          w-1
          h-28
          bg-blue-600
          rounded-full
          "

        />


      </div>




      <motion.h1

        initial={{ scale: 0 }}

        animate={{ scale: 1 }}

        transition={{ duration: 0.5 }}

        className="text-5xl font-bold text-slate-800 mt-4"

      >

        {score}

      </motion.h1>



      <div
        className={`
        inline-block
        px-5
        py-2
        rounded-full
        mt-4
        font-semibold
        ${getColor()}
        ${getBgColor()}
        `}
      >

        {category} Risk

      </div>



      <div className="flex justify-between text-sm text-gray-500 mt-6 px-8">

        <span>0</span>

        <span>50</span>

        <span>100</span>

      </div>



    </div>

  );

}


export default RiskMeter;