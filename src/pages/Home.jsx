import GameDashboard from "../Components/GameDashboard/GameDashboard";
import { NumberComponent } from "../Components/NumberComponent/NumberComponent";
import OrderTabs from "../Components/Tabs/OrderTabs";

const Home = () => {
  return (
    <div className="mt-5 space-y-6">
   
  
      <GameDashboard />
      <NumberComponent/>
      <OrderTabs />
    </div>
  );
};

export default Home;
