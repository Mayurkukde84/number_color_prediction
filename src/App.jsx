import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./Layouts/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SuperAdmin from "./Components/superAdmin/SuperAdmin";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/superadmin" element={<SuperAdmin/>} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </>
  );
};

export default App;
