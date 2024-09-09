import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Features from "./layouts/features/Features";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/#features' element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;
