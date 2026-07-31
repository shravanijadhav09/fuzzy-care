import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AssessmentPage from "./pages/AssessmentPage";


function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />


      <Route
        path="/assessment"
        element={<AssessmentPage />}
      />

    </Routes>

  );

}


export default App;