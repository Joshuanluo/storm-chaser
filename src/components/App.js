import logo from "../logo.svg";
import "../App.css";
import DashBoard from "./DashBoard";
import DisplayNavbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <DisplayNavbar />
      <DashBoard />
    </div>
  );
}

export default App;
