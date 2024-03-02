import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const data = [
    {
      label: "USER",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `User Payment history here`,
    },
    {
      label: "ADMIN",
      value: "profile",
      icon: UserCircleIcon,
      desc: `admin payment history`,
    },
    
  ];
const PaymentHistoryPage = () => {
  return (
    <Tabs value="dashboard" className='mt-10'>
    <TabsHeader>
      {data.map(({ label, value, icon }) => (
        <Tab key={value} value={value}>
          <div className="flex items-center gap-2">
            {React.createElement(icon, { className: "w-5 h-5" })}
            {label}
          </div>
        </Tab>
      ))}
    </TabsHeader>
    <TabsBody>
      {data.map(({ value, desc }) => (
        <TabPanel key={value} value={value}>
          {desc}
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>
  )
}

export default PaymentHistoryPage