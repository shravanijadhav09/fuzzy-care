function RiskMeter({ score, category }) {

  const percentage = score || 0;

  const rotation = (percentage / 100) * 180 - 90;


  const getColor = () => {

    if (category === "Low") return "text-green-500";

    if (category === "Medium") return "text-yellow-500";

    return "text-red-500";

  };


  return (

    <div className="bg-white rounded-2xl shadow-md p-8 text-center">


      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Risk Assessment
      </h2>



      <div className="relative w-64 h-32 mx-auto overflow-hidden">


        {/* Gauge Background */}

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


        {/* Colored Progress */}

        <div
          className="
          absolute
          w-64
          h-64
          rounded-full
          border-[25px]
          border-red-500
          "
          style={{
            clipPath: "inset(0 0 50% 0)",
            transform: `rotate(${rotation}deg)`
          }}
        />


        {/* Center Value */}

        <div className="absolute inset-0 flex items-end justify-center pb-5">

          <div>

            <h1 className="text-4xl font-bold text-slate-800">

              {score}

            </h1>


            <p className={`font-semibold ${getColor()}`}>

              {category} Risk

            </p>


          </div>


        </div>


      </div>


      <div className="flex justify-between mt-5 px-6 text-sm text-gray-500">

        <span>0</span>

        <span>50</span>

        <span>100</span>

      </div>


    </div>

  );

}


export default RiskMeter;