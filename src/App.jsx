import { NavbarDefault } from "./Components/Navbar/NavbarDefault";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./Layouts/AppLayout";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
