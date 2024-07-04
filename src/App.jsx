import FormLog from "./pages/FormLog";
import FormSign from "./pages/FormSign";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<FormLog />} />
            <Route path="/signUp" element={<FormSign />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
