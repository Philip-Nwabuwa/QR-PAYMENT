import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
// import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
