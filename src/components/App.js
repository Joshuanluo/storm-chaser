import logo from "../logo.svg";
import "../App.css";
import DashBoard from "./DashBoard";
import FormPage from "./FormPage";
import DisplayNavbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <DisplayNavbar />
      <DashBoard />
      <Home />
      <FormPage />
    </div>
  );
}

export default App;
