import "./App.css";
import ParrentComponent from "./components/form/ParrentComponent";
import HomePage from "./components/homepage/HomePage";
import UseStateForm from "./components/hooks/UseStateForm";
import UseStateHook from "./components/hooks/UseStateHook";
import Navbar from "./components/navbar/Navbar";

function App() {

 let userName = "Codekul"
 
  return (
    <div className="overflow-hidden">
      {/* <Navbar />
      <HomePage/> */}
      {/* <UseStateForm /> */}
      <ParrentComponent  userName={userName}/>
    </div>
  );
}
export default App;
