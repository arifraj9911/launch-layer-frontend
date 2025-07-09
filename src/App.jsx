import "./App.css";
import Home from "./pages/components/Home";
import Footer from "./pages/shared/Footer/Footer";
import Navbar from "./pages/shared/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
