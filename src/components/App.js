import logo from "../logo.svg";
import "../App.css";
import DashBoard from "./DashBoard";
import FormPage from "./FormPage";
import DisplayNavbar from "./Navbar";

function App() {
  return (
    <div className="App">

      <DisplayNavbar />
      <DashBoard />
      <hr />
      <FormPage />

      
    </div>
  );
}

export default App;
