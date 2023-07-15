import {
  BanknotesIcon,
  UserIcon,

} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Total Lectores",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "lectores estan conectados",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total Usuarios",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "552",
      label: "usuarios han pasado hoy por almenos un lector",
    },
  },
 
];

export default statisticsCardsData;
