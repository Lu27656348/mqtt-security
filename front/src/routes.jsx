import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { Login } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Panel de Control",
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [

      {
        icon: <UserCircleIcon {...icon} />,
        name: "Usuarios",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Areas",
        path: "/areas",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Permisos",
        path: "/permisos",
        element: <Notifications />,
      },
    ],
  },
  // {
  //   title: "Cerrar Sesion",
  //   layout: "login",
  //   pages: [
  //     {
  //       icon: <ArrowRightOnRectangleIcon {...icon} />,
  //       name: "Cerrar Sesion",
  //       path: "",
  //       element: <Login />,
  //     },
     
  //   ],
  // },
];

export default routes;
