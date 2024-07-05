import FormLog from "./pages/FormLog";
import FormSign from "./pages/FormSign";
import Dashbord from "./pages/Dashbord";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<FormLog />} />
            <Route path="/signUp" element={<FormSign />} />
            <Route path="/dashBord" element={<Dashbord />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
