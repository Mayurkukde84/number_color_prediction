import React from "react";
import CountdownTimer from "../CountDown/CountDownTimer";

const GameDashboard = () => {
  return (
    <div className="text-black p-2">
      <div className="flex justify-between">
        <div>
          <p>Peroids</p>
          <p>971447</p>
        </div>
        <div>
          <p>Count Down</p>
          <CountdownTimer />
        </div>
      </div>
      <p className="mt-5 mb-2 font-bold w-full bg-gray-500 text-black p-1 rounded-lg">Select Color</p>
      <div className="flex justify-between  items-center gap-4 text-white">
        <div className="bg-red-700 flex items-center justify-center w-1/3 h-[4rem] ">
          join red
        </div>
        <div className="bg-blue-700 flex items-center justify-center w-1/3 h-[4rem]">
          join blue
        </div>
        <div className="bg-green-700 flex items-center justify-center w-1/3 h-[4rem]">
          join green
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
