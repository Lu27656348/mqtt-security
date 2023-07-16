import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  UserIcon,

} from "@heroicons/react/24/solid";

import { StatisticsCard } from "@/widgets/cards";
import Lectores from "@/components/Lectores";

export function Home() {

  
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
          <StatisticsCard
            color="blue"
            icon={React.createElement(BanknotesIcon, {
              className: "w-6 h-6 text-white",
            })}
            title="Total Lectores"
            value="50"
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className="text-green-500">+55%</strong>
                &nbsp;lectores estan conectados
              </Typography>
            }
          />

          <StatisticsCard
            color="pink"
            icon={React.createElement(UserIcon, {
              className: "w-6 h-6 text-white ",
            })}
            title="Usuarios Ingresados Hoy"
            value="150"
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className="text-green-500">552</strong>
                &nbsp;usuarios han pasado hoy por almenos un lector
              </Typography>
            }
          />
      
      </div>
      <Lectores  />
    </div>
  );
}

export default Home;

    