import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Landing from "./pages/landing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/generator" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default App;
