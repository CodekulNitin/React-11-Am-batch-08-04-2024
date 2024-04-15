import "./App.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomePage /> 
    </div>
  );
}
export default App;
