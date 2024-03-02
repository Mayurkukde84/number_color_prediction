import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./Layouts/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SuperAdminAllFeatures from "./pages/superAdminPages/SuperAdminAllFeatures";
import AdminIdPage from "./pages/superAdminPages/AdminIdPage";
import AdminName from "./pages/superAdminPages/AdminName";
import AdminAmountPage from "./pages/superAdminPages/AdminAmountPage";
import UserIdPage from "./pages/superAdminPages/rechargeuser/UserIdPage";
import UserName from "./pages/superAdminPages/rechargeuser/UserName";
import UserAmountPage from "./pages/superAdminPages/rechargeuser/UserAmountPage";
import PaymentHistoryPage from "./pages/superAdminPages/patmentHistory/PaymentHistoryPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/superadmin" element={<SuperAdminAllFeatures/>} />
          <Route path="superadmin/admin/1" element={<AdminIdPage/>} />
          <Route path="/admin/1/name" element={<AdminName/>} />
          <Route path="/admin/1/name/amount" element={<AdminAmountPage/>} />
          <Route path="/superadmin/user/1" element={<UserIdPage/>} />
          <Route path="/superadmin/user/1/name" element={<UserName/>} />
          <Route path="/superadmin/user/1/name/amount" element={<UserAmountPage/>} />
          <Route path="paymenthistory" element={<PaymentHistoryPage/>} />
     
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </>
  );
};

export default App;
