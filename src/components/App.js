import "../App.css";
import DashBoard from "./DashBoard";
import DisplayNavbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <DisplayNavbar />
      <Container>
        <DashBoard />
      </Container>
    </div>
  );
}

export default App;
