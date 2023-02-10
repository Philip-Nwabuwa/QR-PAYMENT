import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/landing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/generator" element={<Home />} />
    </Routes>
  );
};

export default App;
