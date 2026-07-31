function HistoryCard({ history = [] }) {


  return (

    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">


      <h2 className="text-xl font-semibold text-slate-800 mb-5">
        Assessment History
      </h2>


      {
        history.length === 0 ? (

          <p className="text-gray-500">
            No previous assessments available.
          </p>

        ) : (

          <div className="space-y-4">


            {
              history.map((item,index)=>(

                <div
                  key={index}
                  className="
                  border
                  rounded-xl
                  p-4
                  flex
                  justify-between
                  "
                >

                  <div>

                    <p className="font-medium">
                      Score: {item.score}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>

                  </div>


                  <span className="font-semibold">

                    {item.category}

                  </span>


                </div>

              ))
            }


          </div>

        )
      }


    </div>

  );

}


export default HistoryCard;