import RiskMeter from "./RiskMeter";
import ReasonsCard from "./ReasonsCard";
import Suggestions from "./Suggestions";


function ResultCard({ result }) {


  if (!result) return null;


  return (

    <div className="mt-10">

      <RiskMeter
        score={result.risk_score || 0}
        category={result.risk_category || "Low"}
      />


      <ReasonsCard
        reasons={result.reasons || []}
      />


      <Suggestions
        suggestions={result.suggestions || []}
      />

    </div>

  );

}


export default ResultCard;