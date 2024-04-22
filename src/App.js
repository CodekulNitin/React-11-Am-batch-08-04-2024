import "./App.css";
import HomePage from "./components/homepage/HomePage";
import UseStateForm from "./components/hooks/UseStateForm";
import UseStateHook from "./components/hooks/UseStateHook";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <Navbar />
      <HomePage/> */}
      <UseStateForm />
    </div>
  );
}
export default App;
