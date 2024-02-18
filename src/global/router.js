import { createBrowserRouter } from "react-router-dom";
import { Nav } from "../components/nav";
import { PageIntro } from "../pages/introduction/indexIntro";
import { PageRoom, getRoomDatas } from "../pages/roomType/indexRoom";
import { RoomDetail } from "../pages/roomType/components/roomDetail";
import { PageServices, getServiceDatas } from "../pages/services/indexServices";
import { ServiceDetail } from "../pages/services/components/serviceDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "hotel-offical-web",
        element: <PageIntro />,
      },
      {
        path: "roomType",
        element: <PageRoom />,
        loader: getRoomDatas,
      },
      {
        path: "roomType/:roomId",
        element: <RoomDetail />,
        loader: getRoomDatas,
      },
      {
        path: "services",
        element: <PageServices />,
        loader: getServiceDatas,
      },
      {
        path: "services/:serviceId",
        element: <ServiceDetail />,
        loader: getServiceDatas,
      },
    ],
  },
]);
