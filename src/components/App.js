import { useState, useEffect } from "react";
import "../App.css";
import DashBoard from "./DashBoard";
import FormPage from "./FormPage";
import DisplayNavbar from "./Navbar";
import Home from "./Home";
import ThankPage from "./ThankPage";

function App() {
  const [home, setHome] = useState(true);
  const [form, setForm] = useState(false);
  const [thankyou, setThankyou] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const toHome = () => {
    setHome(true);
    setForm(false);
    setThankyou(false);
    setDashboard(false);
  };
  const toForm = () => {
    setHome(false);
    setForm(true);
    setThankyou(false);
    setDashboard(false);
  };
  const toThankyou = () => {
    setHome(false);
    setForm(false);
    setThankyou(true);
    setDashboard(false);
  };
  const toDashboard = () => {
    setHome(false);
    setForm(false);
    setThankyou(false);
    setDashboard(true);
  };

  if (home) {
    return (
      <div className="App">
        <DisplayNavbar />
        <Home toForm={toForm} />
      </div>
    );
  }
  if (form) {
    return (
      <div className="App">
        <DisplayNavbar />
        <FormPage toHome={toHome} toThankyou={toThankyou} />
      </div>
    );
  }
  if (thankyou) {
    return (
      <div className="App">
        <DisplayNavbar />
        <ThankPage toHome={toHome} />
      </div>
    );
  }
  if (dashboard) {
    return (
      <div className="App">
        <DisplayNavbar />
        <DashBoard toHome={toHome} />
      </div>
    );
  }
}

export default App;
