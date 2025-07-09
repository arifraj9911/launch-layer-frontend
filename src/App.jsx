import "./App.css";
import Home from "./pages/components/Home";
import Footer from "./pages/shared/Footer/Footer";
import Navbar from "./pages/shared/Navbar/Navbar";
import BlurCorner from "./pages/ui/BlurCorner";

function App() {
  return (
    <div className="relative overflow-hidden">
      {/* Blurred corner */}
      <BlurCorner/>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
