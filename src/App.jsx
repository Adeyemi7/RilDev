

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPages from "./Pages/NotFoundPages";
import HomeProfilePage from "./Pages/HomeProfilePage";
import AboutMePage from "./Pages/AboutMePage";
import MyTechStack from "./Pages/MyTechStack";
import MyWorkExperience from "./Pages/MyWorkExperience";


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/"  element={ <HomeProfilePage />} />
        <Route path="/AboutMePage"  element={ <AboutMePage />} />
        <Route path="/MyTechStack" element={<MyTechStack />} />
        <Route path="/MyWorkExperience" element={<MyWorkExperience />} />



        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </Router>
  );
};

export default App;
