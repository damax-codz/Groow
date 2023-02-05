import "./App.css";
import Landing from "./Landing/Landing";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Anim from "./Landing/Anim";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/" element={<Anim />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
