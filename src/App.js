import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemMaster from "./components/form/ItemMaster";
import ParrentComponent from "./components/contextapi/ParrentComponent";
import HomePage from "./components/react-router-dom/HomePage";
import UseStateForm from "./components/hooks/UseStateForm";
import UseStateHook from "./components/hooks/UseStateHook";
import Navbar from "./components/react-router-dom/Navbar";
import About from "./components/react-router-dom/About";
import Gallary from "./components/react-router-dom/Gallary";
import ContactUs from "./components/react-router-dom/ContactUs";
import ErrorPage from "./components/react-router-dom/ErrorPage";
import Product from "./components/react-router-dom/admin/Product";
import Details from "./components/react-router-dom/admin/Details";
import UseMemoHook from "./components/hooks/UseMemoHook";
import UseCallBackHook from "./components/hooks/usecallback/UseCallBackHook";
import UseReducerHook from "./components/hooks/useReducerHook";
import UseLayoutHook from "./components/hooks/UseLayoutHook";

function App() {
  let user = "Codekul";

  return (
    <div className="overflow-hidden">
      {/* <Navbar />
      <HomePage/> */}
      {/* <UseStateForm /> */}
      {/* <ParrentComponent  userName={user}/> */}
      {/* <ItemMaster /> */}
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="gallary" element={<Gallary />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="useMemo" element={<UseMemoHook />} />
        <Route path="parrent" element={<ParrentComponent />} />
        <Route path="useCallback" element={<UseCallBackHook />} />
        <Route path="useReducerHook" element={<UseReducerHook />} />
        <Route path="useLayoutHook" element={<UseLayoutHook />} />
        <Route path="product" element={<Product />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
