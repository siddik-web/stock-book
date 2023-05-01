import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />}></Route>
            <Route path="success" element={<Success />}></Route>
            <Route path="cancel" element={<Cancel />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
