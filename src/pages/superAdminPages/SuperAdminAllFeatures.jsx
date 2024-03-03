
import ButtonUI from "../../ui/ButtonUI";
import { useNavigate } from "react-router-dom";
const SuperAdmin = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-5 flex flex-col gap-6">
      <div className="flex justify-between">
        <p className="">Super Admin ID:114552</p>
        <p>Total :114552</p>
      </div>
      <ButtonUI onClick={()=>navigate("/superadmin/admin/1")}  >Recharge ADMIN</ButtonUI>
      <ButtonUI onClick={()=>navigate("/superadmin/user/1")} >Recharge USER</ButtonUI>
      <ButtonUI onClick={()=>navigate("/paymenthistory")} >Recharge HISTORY </ButtonUI>
      <ButtonUI onClick={()=>navigate("/signup")} >Create ADMIN</ButtonUI>
    </div>
  );
};

export default SuperAdmin;
