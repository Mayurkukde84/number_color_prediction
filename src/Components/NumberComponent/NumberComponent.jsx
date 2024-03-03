import React from "react";
import { Badge, Button } from "@material-tailwind/react";
import OrderTabs from "../Tabs/OrderTabs";

export const NumberComponent = () => {
  const numbersArray = Array.from({ length: 10 }, (_, index) => index);
  console.log(numbersArray);
  return (
    <div className="p-2">
      <p className=" mb-5 font-bold w-full bg-gray-500 text-black p-1 rounded-lg">
        Number
      </p>
      
        <div className="flex justify-between p-5">
        <Badge className="h-10 w-10" style={{ background: `linear-gradient(to right, red 50%, #4caf50 50%)` }} content={0} />

          <Badge color="blue" content={1} className="h-10 w-10"/>
          <Badge color="red" content={2} className="h-10 w-10"/>
          <Badge color="green" content={3} className="h-10 w-10"/>
          <Badge color="blue" content={4} className="h-10 w-10"/>
        </div>
        <div className="flex justify-between mt-5 p-5">
        <Badge className="h-10 w-10" style={{ background: `linear-gradient(to right, red 50%,#2196f3 50%)` }} content={0} />
          <Badge  content={6} className="h-10 w-10"/>
          <Badge color="blue" content={7} className="h-10 w-10"/>
          <Badge   content={8} className="h-10 w-10"/>
          <Badge color="green" content={9} className="h-10 w-10"/>
        </div>

      
      
    </div>
  );
};
