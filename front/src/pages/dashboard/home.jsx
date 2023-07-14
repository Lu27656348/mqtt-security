import React from "react";
import {
  Typography,
} from "@material-tailwind/react";

import { StatisticsCard } from "@/widgets/cards";
import {
  statisticsCardsData,
  
} from "@/data";
import Lectores from "@/components/Lectores";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <Lectores  />
    </div>
  );
}

export default Home;

    