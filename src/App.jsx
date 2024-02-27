import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./Layouts/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
